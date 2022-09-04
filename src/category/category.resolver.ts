import { Param, ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entiti/category';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    try {
      return await this.categoryService.getMany();
    } catch (error) {}
  }

  @Query(() => Category)
  async categoryById(@Args('id') id: string) {
    try {
      return await this.categoryService.getById(id);
    } catch (error) {}
  }
}
