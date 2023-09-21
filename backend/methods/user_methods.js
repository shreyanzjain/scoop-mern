const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 8;

const prisma = new PrismaClient();

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
    })
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

    const is_correct_password = await bcrypt.compare(password, user.hashed_password);
    return is_correct_password;
}

async function get_data_for_jwt(email){
    const user = await prisma.user.findFirst({
        select: {
            id: true,
        },
        where: {
            email: email,
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

    const user_dict = {id: user.id, email: email};
    return user_dict;
}
module.exports = {create_user, login_user, get_data_for_jwt};