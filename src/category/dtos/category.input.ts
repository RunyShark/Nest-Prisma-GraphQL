import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
@InputType()
export class CategoryInput {
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(5)
  @IsString()
  @Field({ nullable: true })
  name: string;
}
