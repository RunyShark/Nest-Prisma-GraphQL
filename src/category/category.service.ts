import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  async getMany() {
    return [
      {
        id: '123123',
        createAt: new Date(),
        updateAt: new Date(),
        name: 'Test Query',
      },
    ];
  }
  async get() {
    return;
  }
  async create() {
    return;
  }
  async update() {
    return;
  }
  async delete() {
    return;
  }
}
