import { IsString, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string; // first name only

    @IsEmail()
    @Matches(/@unima\.ac\.mw$/, { 
        message: 'Email must be from @unima.ac.mw domain' 
    })
    email: string;

    @IsString()
    role: string;
}
