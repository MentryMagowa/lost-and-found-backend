import { IsString, IsEmail, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  name?: string; // first name only

  @IsOptional()
  @IsEmail()
  @Matches(/@unima\.ac\.mw$/, {
    message: 'Email must be from @unima.ac.mw domain',
  })
  email?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsString()
  password: string;
}