import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entiti/category';
import { CategoryInput, UpdateCategoryInput } from './dtos';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async categories() {
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
    @Args({ name: 'input', type: () => CategoryInput })
    categoryInput: CategoryInput
  ) {
    try {
      return await this.categoryService.create(categoryInput);
    } catch (error) {}
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args({ name: 'input', type: () => UpdateCategoryInput })
    updateCategoryInput: UpdateCategoryInput
  ) {
    try {
      return await this.categoryService.update(updateCategoryInput);
    } catch (error) {}
  }

  @Mutation(() => Category)
  async deleteCategory(@Args('id') id: string): Promise<Category> {
    try {
      return await this.categoryService.delete(id);
    } catch (error) {}
  }
}
