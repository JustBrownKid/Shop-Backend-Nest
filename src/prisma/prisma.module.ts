import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BlognpxModule } from './blognpx/blognpx.module';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
    imports: [BlognpxModule],
})
export class PrismaModule {}
