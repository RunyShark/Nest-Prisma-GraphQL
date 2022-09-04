import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CategoryDTO } from './category.dto';
@InputType()
export class UpdateCategoryDTO extends PartialType<CategoryDTO>(CategoryDTO) {
  @IsNotEmpty()
  @Field({ nullable: true })
  id: string;
}
