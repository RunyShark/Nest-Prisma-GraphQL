import { Injectable } from '@nestjs/common';
import { CreateAnswerModuleInput } from './dto/create-answer-module.input';
import { UpdateAnswerModuleInput } from './dto/update-answer-module.input';

@Injectable()
export class AnswerModuleService {
  create(createAnswerModuleInput: CreateAnswerModuleInput) {
    return 'This action adds a new answerModule';
  }

  findAll() {
    return `This action returns all answerModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answerModule`;
  }

  update(id: number, updateAnswerModuleInput: UpdateAnswerModuleInput) {
    return `This action updates a #${id} answerModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} answerModule`;
  }
}
