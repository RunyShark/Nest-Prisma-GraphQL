import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConnectPrismaService } from '../connect-prisma/connect-prisma.service';
import { Category } from './entiti/category';
import { CategoryDTO, UpdateCategoryDTO } from './dtos';

@Injectable()
export class CategoryService {
  private readonly logger = new Logger('ProductService');
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
      const categoryById = await this.connectPrismaService.category.findUnique({
        where: { id },
        // include: {
        //   questions: {
        //     include: {
        //       answers: true,
        //     },
        //   },
        // },
      });
      if (!categoryById) throw new NotFoundException(`La categoria con el id: ${id} no existe`);
      return categoryById;
    } catch (error) {
      return error;
    }
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
      const esta = await this.getById(id);

      if (esta.status === 404) this.handleDBExceptions(esta);

      return await this.connectPrismaService.category.delete({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  private handleDBExceptions(error: any) {
    if (error.response) throw new BadRequestException(error.message);
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.code === '23502') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
