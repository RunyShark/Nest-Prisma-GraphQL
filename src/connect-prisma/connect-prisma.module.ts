import { Global, Module } from '@nestjs/common';
import { ConnectPrismaService } from './connect-prisma.service';
@Global()
@Module({
  providers: [ConnectPrismaService],
  exports: [ConnectPrismaService],
})
export class ConnectPrismaModule {}
