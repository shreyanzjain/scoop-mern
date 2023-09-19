const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 8;

const prisma = new PrismaClient();

async function create_user(email, role, password) {

    const hashed_password = bcrypt.hashSync(password, SALT_ROUNDS);

    await prisma.user.create({
        data: {
            email: email,
            role: role,
            hashed_password: hashed_password
        }
    })
}

async function login_user(email, password) {
    // method to login the user, and return a cookie to the browser
}

module.exports = {create_user, login_user};