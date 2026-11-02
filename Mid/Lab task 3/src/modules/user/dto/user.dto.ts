import { IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Matches, Max, Min, MinLength} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsNotEmpty({message: 'Full Name is required' })
    @IsString({message: 'Name must be a string' })
    @MinLength(3, {message: 'Name must be at least 3 characters long' })
    fullName!: string;

    @IsNotEmpty({message: 'Email is required'})
    @IsEmail({}, {message: 'Must be valid email address' })
    email!: string;

    @IsString()
    @IsNotEmpty({message: 'Password is required'})
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,{message:"Password should be matched with the format"})
    password!:string;

    @IsNotEmpty({ message: 'Age is required' })
    @Type(() => Number)
    @IsInt({ message: 'Age must be an integer' })
    @Min(18, { message: 'Age must be at least 18' })
    @Max(60, { message: 'Age must not exceed 60' })
    age!: number;

    @IsNotEmpty({ message: 'Phone number is required' })
    @IsString({ message: 'Phone number must be a string' })
    @Matches(/^01\d{9}$/, {message: 'Phone number must be exactly 11 digits and start with 01'})
    phone!: string;

    @IsNotEmpty({ message: 'Account type is required' })
    @IsIn(['student', 'teacher'], {message: 'Account type must be either "student" or "teacher"'})
    accountType!: 'student' | 'teacher';

    @IsOptional()
    @IsString({message: 'Address must be a string' })
    @MinLength(10, {message: 'Address must be min 10 characters long'})
    address?: string;
}
