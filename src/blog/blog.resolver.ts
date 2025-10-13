import { Resolver ,Query,Mutation, Args, Int } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogDto } from './dto/create-blog.dto';


@Resolver()
export class BlogResolver {
    constructor(private readonly blogService: BlogService) { }
    @Query(() => [Blog], { name: 'blogs' })
    findAll() {
        return this.blogService.findAll();
    }

    @Query(() => Blog, { name: 'blog' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.blogService.findOne(id)
    }

}
