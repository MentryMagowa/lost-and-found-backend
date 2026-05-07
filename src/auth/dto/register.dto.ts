import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsEmail()
  @Matches(/^[a-zA-Z0-9._%+-]+@unima\.ac\.mw$/, {
    message: 'Email must be a valid school email ending with @unima.ac.mw',
  })
  email!: string;
  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  @IsNotEmpty()
  role!: string;
}