import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAcademicProgramDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  degreeLevel!: string;
}

export class UpdateAcademicProgramDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  degreeLevel?: string;
}
