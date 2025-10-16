import { IsEmail, IsNotEmpty, IsString, Length ,IsIn} from 'class-validator';

export class CreateAuthDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;
}
