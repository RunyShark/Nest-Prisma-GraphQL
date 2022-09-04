import { Module } from '@nestjs/common';
import { ConnectPrismaService } from './connect-prisma.service';

@Module({
  providers: [ConnectPrismaService],
  exports: [ConnectPrismaService],
})
export class ConnectPrismaModule {}
