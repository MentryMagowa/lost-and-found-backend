import { IsString, IsEmail, IsOptional, Matches } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    @Matches(/@unima\.ac\.mw$/, { message: 'Email must be from @unima.ac.mw domain' })
    email: string;

    @IsString()
    role: string;
}

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsOptional()
    @Matches(/@unima\.ac\.mw$/, { message: 'Email must be from @unima.ac.mw domain' })
    email?: string;
}
