import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { ConnectPrismaModule } from '../connect-prisma/connect-prisma.module';

@Module({
  providers: [CategoryService, CategoryResolver],
  imports: [CategoryModule, ConnectPrismaModule],
})
export class CategoryModule {}
