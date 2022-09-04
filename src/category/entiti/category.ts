import { Field, ID, ObjectType } from '@nestjs/graphql';
//import { Category as CategoryType } from '@prisma/client';
import { Question } from '../../question/entities/question.entity';

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

  @Field(() => [Question], { nullable: true })
  questions: Question[];
}
