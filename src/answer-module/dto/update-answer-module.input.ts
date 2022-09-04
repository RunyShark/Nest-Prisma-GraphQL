import { CreateAnswerModuleInput } from './create-answer-module.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnswerModuleInput extends PartialType(CreateAnswerModuleInput) {
  @Field(() => Int)
  id: number;
}
