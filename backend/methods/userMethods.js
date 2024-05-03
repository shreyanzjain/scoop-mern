const prisma = require("../instance/init");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 8;

async function create_user(email, role, password) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);
    await prisma.user.create({
      data: {
        email: email,
        role: role,
        hashed_password: hashed_password,
      },
    });
    return ["200", "User created."];
  } else {
    return ["400", "User already exists."];
  }
}

async function login_user(email, password) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (user) {
    const is_correct_password = await bcrypt.compare(
      password,
      user.hashed_password
    );
    if (is_correct_password) {
      return ["200", "Correct password."];
    } else {
      return ["400", "Incorrect password."];
    }
  } else {
    return ["400", "No such user."];
  }
}

async function update_password(user_id, password) {
  const user = await prisma.user.findFirst({
    where: {
      id: user_id,
    },
  });

  const compareCurrentPassword = await bcrypt.compare(
    password,
    user.hashed_password
  );

  if (user.last_password) {
    const compareLastPassword = await bcrypt.compare(
      password,
      user.last_password
    );

    if (compareCurrentPassword || compareLastPassword) {
      return {
        status: 400,
        message:
          "The new password is the same as one of the last two passwords",
      };
    }
  }

  if (compareCurrentPassword) {
    return {
      status: 400,
      message: "The new password is the same as one of the last two passwords",
    };
  }

  const updated_user = await prisma.user.update({
    where: {
      id: user_id,
    },
    data: {
      last_password: user.hashed_password,
      last_modified_date: new Date(),
      hashed_password: await bcrypt.hash(password, SALT_ROUNDS),
    },
  });

  if (updated_user) {
    return { status: 200, message: "Successful" };
  } else {
    return {
      status: 500,
      message: "Password update unsuccessful, try again later.",
    };
  }
}

module.exports = { create_user, login_user, update_password };
