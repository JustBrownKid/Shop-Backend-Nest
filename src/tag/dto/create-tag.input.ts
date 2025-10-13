import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateTagInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  name: string;
}
