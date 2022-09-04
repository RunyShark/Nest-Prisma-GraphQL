import { PartialType } from '@nestjs/graphql';
import { CategoryDTO } from './category.dto';

export class UpdateCategoryDTO extends PartialType<CategoryDTO>(CategoryDTO) {}
