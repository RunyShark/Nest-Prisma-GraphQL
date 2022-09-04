import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CategoryModule } from './category/category.module';
import { ConnectPrismaModule } from './connect-prisma/connect-prisma.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [CoreModule, CategoryModule, ConnectPrismaModule, QuestionModule],
})
export class AppModule {}
