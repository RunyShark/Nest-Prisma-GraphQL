import { Injectable } from '@nestjs/common';
import { ConnectPrismaService } from '../connect-prisma/connect-prisma.service';
import { Category } from './entiti/category';
import { CategoryDTO } from './dtos/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly connectPrismaService: ConnectPrismaService) {}

  async getMany(): Promise<Category[]> {
    return await this.connectPrismaService.category.findMany();
  }
  // {
  //   include: {
  //     questions: {
  //       include: { answers: true },
  //     },
  //   },
  // }
  async getById(id: string) {
    return await this.connectPrismaService.category.findUnique({
      where: { id },
      // include: {
      //   questions: {
      //     include: {
      //       answers: true,
      //     },
      //   },
      // },
    });
  }

  // async create(categoryDTO: CategoryDTO) {
  //   return await this.connectPrismaService.category.create({
  //     categoryDTO,
  //     include: {
  //       questions: {
  //         include: {
  //           answers: true,
  //         },
  //       },
  //     },
  //   });
  // }

  async update() {
    return;
  }

  async delete() {
    return;
  }
}
