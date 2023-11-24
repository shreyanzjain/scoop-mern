// Defines our prisma instance that will be used throughout the backend.

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(1);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(1);
});

module.exports = prisma;
