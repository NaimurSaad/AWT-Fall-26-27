import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  code!: string;
}

export class UpdateDepartmentDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  code?: string;
}
