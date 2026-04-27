import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
    
    @IsString()
    name: string;

    @IsEmail()
    email: string;
    @IsString
    role:string;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    
}
