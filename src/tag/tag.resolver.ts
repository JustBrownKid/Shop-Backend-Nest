import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity'; 

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Tag)
  createTag(@Args('createTagInput') createTagInput: CreateTagDto) {
    return this.tagService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  findAll() {
    return this.tagService.findAll();
  }

  @Query(() => Tag, { name: 'tag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.findOne(id);
  }

  @Mutation(() => Tag)
  updateTag(@Args('updateTagInput') updateTagInput: UpdateTagDto) {
    return this.tagService.update(updateTagInput.id, updateTagInput);
  }

  @Mutation(() => Tag)
  removeTag(@Args('id', { type: () => Int }) id: number) {
    return this.tagService.remove(id);
  }
}
