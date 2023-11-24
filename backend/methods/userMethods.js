const prisma = require('../instance/init');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 8;



async function create_user(email, role, password) {

    const hashed_password = await bcrypt.hash(password, SALT_ROUNDS);

    await prisma.user.create({
        data: {
            email: email,
            role: role,
            hashed_password: hashed_password
        }
    })
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
}

async function login_user(email, password) {
    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });

    const is_correct_password = await bcrypt.compare(password, user.hashed_password);
    return is_correct_password;
}


module.exports = {create_user, login_user};