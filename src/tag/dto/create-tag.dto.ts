import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {InputType , Field } from '@nestjs/graphql';

@InputType()
export class CreateTagDto {
  @ApiProperty({
    description: 'Name of the tag',
    example: 'Electronics',
  })
  @Field()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  name: string;
}
