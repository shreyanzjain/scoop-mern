const prisma = require("../instance/init");

async function get_data_for_jwt(email) {
  const user = await prisma.user.findFirst({
    select: {
      id: true,
      role: true,
      email: true,
    },
    where: {
      email: email,
    },
  });

  const user_dict = { id: user.id, role: user.role, email: user.email };
  return user_dict;
}

module.exports = { get_data_for_jwt };
