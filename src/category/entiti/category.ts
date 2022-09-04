import { ObjectType } from '@nestjs/graphql';
import { Category as CategoryType } from '@prisma/client';

@ObjectType()
export class Category implements CategoryType {
  //@FileSystemDirectoryEntry(() => ID, { nullable: true })
  id: string;

  createdAt: Date;

  updateAt: Date;

  name: string;
  //questions: Question[];
}
