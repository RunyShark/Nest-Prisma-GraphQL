import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entiti/category';
import { CategoryDTO, UpdateCategoryDTO } from './dtos';

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
  async categoryById(@Args('id') id: string): Promise<Category> {
    try {
      return await this.categoryService.getById(id);
    } catch (error) {}
  }

  @Mutation(() => Category)
  async createCategory(
    @Args({ name: 'input', type: () => CategoryDTO })
    categoryDTO: CategoryDTO
  ) {
    try {
      return await this.categoryService.create(categoryDTO);
    } catch (error) {}
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args({ name: 'input', type: () => UpdateCategoryDTO })
    updateCategoryDTO: UpdateCategoryDTO
  ) {
    try {
      return await this.categoryService.update(updateCategoryDTO);
    } catch (error) {}
  }

  @Mutation(() => Category)
  async deleteCategory(@Args('id') id: string): Promise<Category> {
    try {
      return await this.categoryService.delete(id);
    } catch (error) {}
  }
}
