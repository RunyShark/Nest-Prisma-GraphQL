import { Injectable } from '@nestjs/common';
import { ConnectPrismaService } from '../connect-prisma/connect-prisma.service';
import { Category } from './entiti/category';
import { CategoryDTO, UpdateCategoryDTO } from './dtos';

@Injectable()
export class CategoryService {
  constructor(private readonly connectPrismaService: ConnectPrismaService) {}

  async getMany(): Promise<Category[]> {
    try {
      return await this.connectPrismaService.category.findMany();
    } catch (error) {}
  }
  // {
  //   include: {
  //     questions: {
  //       include: { answers: true },
  //     },
  //   },
  // }
  async getById(id: string) {
    try {
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
    } catch (error) {}
  }

  async create(data: CategoryDTO) {
    try {
      return await this.connectPrismaService.category.create({
        data,
      });
    } catch (error) {}
  }
  // include: {
  //   questions: {
  //     include: {
  //       answers: true,
  //     },
  //   },
  // },
  async update(data: UpdateCategoryDTO) {
    const { id } = data;
    try {
      return await this.connectPrismaService.category.update({
        where: { id },
        data,
      });
    } catch (error) {}
  }

  async delete(id: string) {
    try {
      return await this.connectPrismaService.category.delete({ where: { id } });
    } catch (error) {}
  }
}
