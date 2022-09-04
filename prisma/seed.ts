import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { PrismaClient } from '.prisma/client';
import { shuffleArray } from '../src/helper/shuffle-array.helper';
const prisma = new PrismaClient();

const dataPath = join(__dirname, './', 'data');
const filesNames = readdirSync(dataPath);

const files = filesNames.map((files: string) => ({
  name: files.split('.')[0],
  data: JSON.parse(readFileSync(`${dataPath}/${files}`, 'utf-8')),
}));

interface Question {
  default_size: string;
  mini_size: string;
  correct: string;
  incorrects: string[];
  url: string;
}

const main = async () => {
  await Promise.all(
    files.map(async (file) => {
      return await prisma.category.create({
        data: {
          name: file.name,
          questions: {
            create: file.data.map((question: any) => ({
              conent: question.default_size,
              answers: {
                create: shuffleArray([...question.incorrects, question.correct]).map((answer) => ({
                  content: answer,
                  isCorrect: answer === question.correct,
                  url: question.url,
                })),
              },
            })),
          },
        },
      });
    })
  );
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
