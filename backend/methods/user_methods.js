const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function create_user(email, role, hashed_password) {
    await prisma.user.create({
        data: {
            email: email,
            role: role,
            hashed_password: hashed_password
        }
    })
}

module.exports = {create_user};