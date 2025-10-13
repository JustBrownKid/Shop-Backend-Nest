import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagResolver } from './tag.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TagController } from './tag.controller';

@Module({
  imports:[PrismaModule],
  providers: [TagResolver, TagService],
  controllers: [TagController],
})
export class TagModule {}
