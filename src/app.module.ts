import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { HealthModule } from './health/health.module';
import { BlogModule } from './blog/blog.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { OtpModule } from './otp/otp.module';
import { APP_PIPE } from '@nestjs/core'; 
import { ValidationPipe } from '@nestjs/common';
import { HiringModule } from './hiring/hiring.module';
import { LocationModule } from './location/location.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';

@Module({ 
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,         
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, 
    }),
    PrismaModule,
    HealthModule,
    BlogModule,
    TagModule,
    AuthModule,
    EmailModule,
    OtpModule,
    HiringModule,
    LocationModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    OrderItemModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {}
