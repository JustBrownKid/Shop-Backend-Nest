import { Module } from '@nestjs/common';
import { HiringService } from './hiring.service';
import { HiringController } from './hiring.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HiringController],
  providers: [HiringService],
  exports:[HiringService]
})
export class HiringModule {}
