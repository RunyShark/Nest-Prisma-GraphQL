import { Module } from '@nestjs/common';
import { AnswerModuleService } from './answer-module.service';
import { AnswerModuleResolver } from './answer-module.resolver';

@Module({
  providers: [AnswerModuleResolver, AnswerModuleService],
})
export class AnswerModuleModule {}
