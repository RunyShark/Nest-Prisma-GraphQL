import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CategoryInput } from './category.input';
@InputType()
export class UpdateCategoryInput extends PartialType<CategoryInput>(CategoryInput) {
  @IsNotEmpty()
  @Field({ nullable: true })
  id: string;
}
