import { Resolver, Query } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entiti/category';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  //: Promise<Category[]>
  async cateries() {
    return await this.categoryService.getMany();
  }
}
