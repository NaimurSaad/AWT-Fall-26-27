import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { CreateAcademicProgramDto, UpdateAcademicProgramDto } from './dto/academic-program.dto';

@Controller()
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  // Departments
  @Get('departments')
  async getDepartments() {
    return await this.universityService.getDepartments();
  }

  @Get('departments/:id')
  async getDepartmentById(@Param('id') id: string) {
    return await this.universityService.getDepartmentById(id);
  }

  @Post('departments')
  async createDepartment(@Body() dto: CreateDepartmentDto) {
    return await this.universityService.createDepartment(dto);
  }

  @Patch('departments/:id')
  async updateDepartment(@Param('id') id: string, @Body() dto: UpdateDepartmentDto) {
    return await this.universityService.updateDepartment(id, dto);
  }

  @Delete('departments/:id')
  async deleteDepartment(@Param('id') id: string) {
    return await this.universityService.deleteDepartment(id);
  }

  // Academic programs
  @Get('academic-programs')
  async getAcademicPrograms() {
    return await this.universityService.getAcademicPrograms();
  }

  @Get('academic-programs/:id')
  async getAcademicProgramById(@Param('id') id: string) {
    return await this.universityService.getAcademicProgramById(id);
  }

  @Post('academic-programs')
  async createAcademicProgram(@Body() dto: CreateAcademicProgramDto) {
    return await this.universityService.createAcademicProgram(dto);
  }

  @Patch('academic-programs/:id')
  async updateAcademicProgram(@Param('id') id: string, @Body() dto: UpdateAcademicProgramDto) {
    return await this.universityService.updateAcademicProgram(id, dto);
  }

  @Delete('academic-programs/:id')
  async deleteAcademicProgram(@Param('id') id: string) {
    return await this.universityService.deleteAcademicProgram(id);
  }
}
