import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from '../../category/entiti/category';

@ObjectType()
export class Question {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updateAt: Date;

  @Field({ nullable: true })
  conent: string;

  // @Field({ nullable: true })
  // answers: Answers[];

  @Field(() => Category, { nullable: true })
  category: Category;

  @Field({ nullable: true })
  categoryId: string;
}
