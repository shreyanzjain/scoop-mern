const prisma = require("../instance/init");
const {create_user} = require("../methods/userMethods");

async function create_admin(email, role, password) {
  // the admin account is the first to be created
  const user = await prisma.user.findFirst({
    where: {
      id: 1,
    },
  });

  if (!user) {
    await create_user(email, role, password);
    console.log(
      `Admin account created with credentials email: \'${email}\', password: \'${password}\'`
    );
  }
}

module.exports = { create_admin };
