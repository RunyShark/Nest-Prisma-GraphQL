import { Field, ID, ObjectType } from '@nestjs/graphql';
//import { Category as CategoryType } from '@prisma/client';

@ObjectType()
export class Category {
  @Field(() => ID, { nullable: true })
  id: string;
  @Field({ nullable: true })
  createdAt: Date;
  @Field({ nullable: true })
  updateAt: Date;
  @Field({ nullable: true })
  name: string;
  //questions: Question[];
}
