import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswerModuleService } from './answer-module.service';
import { AnswerModule } from './entities/answer-module.entity';
import { CreateAnswerModuleInput } from './dto/create-answer-module.input';
import { UpdateAnswerModuleInput } from './dto/update-answer-module.input';

@Resolver(() => AnswerModule)
export class AnswerModuleResolver {
  constructor(private readonly answerModuleService: AnswerModuleService) {}

  @Mutation(() => AnswerModule)
  createAnswerModule(
    @Args('createAnswerModuleInput') createAnswerModuleInput: CreateAnswerModuleInput
  ) {
    return this.answerModuleService.create(createAnswerModuleInput);
  }

  @Query(() => [AnswerModule], { name: 'answerModule' })
  findAll() {
    return this.answerModuleService.findAll();
  }

  @Query(() => AnswerModule, { name: 'answerModule' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.answerModuleService.findOne(id);
  }

  @Mutation(() => AnswerModule)
  updateAnswerModule(
    @Args('updateAnswerModuleInput') updateAnswerModuleInput: UpdateAnswerModuleInput
  ) {
    return this.answerModuleService.update(updateAnswerModuleInput.id, updateAnswerModuleInput);
  }

  @Mutation(() => AnswerModule)
  removeAnswerModule(@Args('id', { type: () => Int }) id: number) {
    return this.answerModuleService.remove(id);
  }
}
