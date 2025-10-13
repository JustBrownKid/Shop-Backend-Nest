import { ObjectType, Field, Int, } from '@nestjs/graphql';
import { Tag } from 'src/tag/entities/tag.entity';
@ObjectType() 
export class Blog {
  @Field(() => Int)
  id: number; 

  @Field()
  title: string;

  @Field({ nullable: true })
  image?: string;

  @Field()
  content: string;

  @Field(() => Int)
  tag_id: number;

  @Field({ nullable: true })
  created_at?: Date;

  @Field({ nullable: true })
  updated_at?: Date;
  
 @Field(() => Tag, { nullable: true })
 tag?: Tag; 

}
