import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

const dataPath = join(__dirname, './', 'data');
const filesNames = readdirSync(dataPath);

const files = filesNames.map((files: string) => ({
  name: files.split('.')[0],
  data: JSON.parse(readFileSync(`${dataPath}/${files}`, 'utf-8')),
}));

const main = async () => {
  console.log(files);
  //await prisma.category.deleteMany();
  //   await prisma.category.create({
  //     data: {
  //       name: 'Explame',ls
  //     },
  //   })
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
