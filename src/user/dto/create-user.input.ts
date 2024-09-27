import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string
  
  @Field()
  @IsEmail()
  @IsString()
  email: string

  @Field()
  @IsString()
  password: string
}
