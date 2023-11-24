// Defines our prisma instance that will be used throughout the backend.

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;