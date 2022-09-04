import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //await prisma.category.deleteMany();
  await prisma.category.create({
    data: {
      name: 'Explame',
    },
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
