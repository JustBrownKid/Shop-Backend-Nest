import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogResolver } from './blog.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoleMiddleware } from 'src/middleware/role.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [BlogController],
  providers: [BlogService, BlogResolver],
})
export class BlogModule { }

// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(RoleMiddleware(['user', 'Admin']))
//       .forRoutes(
//         { path: 'blog', method: RequestMethod.GET },
//         { path: 'blog/:id', method: RequestMethod.GET }, 
//       );

//     consumer
//       .apply(RoleMiddleware(['Admin']))
//       .forRoutes(
//         { path: 'blog', method: RequestMethod.POST },
//         { path: 'blog/:id', method: RequestMethod.PUT },
//         { path: 'blog/:id', method: RequestMethod.PATCH },
//         { path: 'blog/:id', method: RequestMethod.DELETE },
//       );
//   }
// }
