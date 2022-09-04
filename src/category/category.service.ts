import { Injectable } from '@nestjs/common';
import { ConnectPrismaService } from '../connect-prisma/connect-prisma.service';
import { Category } from './entiti/category';

@Injectable()
export class CategoryService {
  constructor(private readonly connectPrismaService: ConnectPrismaService) {}

  async getMany(): Promise<Category[]> {
    return await this.connectPrismaService.category.findMany();
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
