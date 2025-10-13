import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Blog } from 'src/blog/entities/blog.entity';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: bigint; 

  @Field()
  name: string;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;

  @Field(() => [Blog], { nullable: true })
  blogs?: Blog[];
}
