import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateQuestionInput {
  @IsNotEmpty()
  @MaxLength(500)
  @MinLength(5)
  @Field({ nullable: true })
  content: string;

  @IsNotEmpty()
  @Field({ nullable: true })
  categoryId: string;
}
