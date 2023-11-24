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
    return ['200', 'User created.'];
  } else {
    return ['400', 'User already exists.'];
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
    if(is_correct_password){
      return ['200', 'Correct password.'];
    } else  {
      return ['400', 'Incorrect password.']
    }
  } else {
    return ['400', 'No such user.']
  }
}

module.exports = { create_user, login_user };
