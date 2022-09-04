import { IsString, MinLength } from 'class-validator';
export class CategoryDTO {
  //updateAt: string;
  @IsString()
  @MinLength(3)
  name: string;
  //   @IsString()
  //   @MinLength(3)
  //questions: string;
}
