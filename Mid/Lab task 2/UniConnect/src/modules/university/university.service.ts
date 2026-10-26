import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { AcademicProgram } from './entities/academic-program.entity';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';
import { CreateAcademicProgramDto, UpdateAcademicProgramDto } from './dto/academic-program.dto';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(AcademicProgram)
    private readonly academicProgramRepository: Repository<AcademicProgram>,
  ) {}

  // Departments
  async getDepartments() {
    try {
      return await this.departmentRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getDepartmentById(id: any) {
    try {
      const department = await this.departmentRepository.findOne({ where: { id } });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      return department;
    } catch (error) {
      throw error;
    }
  }

  async createDepartment(dto: CreateDepartmentDto) {
    try {
      const department = this.departmentRepository.create(dto);
      return await this.departmentRepository.save(department);
    } catch (error) {
      throw error;
    }
  }

  async updateDepartment(id: any, dto: UpdateDepartmentDto) {
    try {
      if (!id) {
        throw new NotFoundException('Department id is required');
      }
      const department = await this.departmentRepository.findOne({ where: { id } });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      Object.assign(department, dto);
      return await this.departmentRepository.save(department);
    } catch (error) {
      throw error;
    }
  }

  async deleteDepartment(id: any) {
    try {
      const department = await this.departmentRepository.findOne({ where: { id } });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      return await this.departmentRepository.remove(department);
    } catch (error) {
      throw error;
    }
  }

  // Academic programs
  async getAcademicPrograms() {
    try {
      return await this.academicProgramRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getAcademicProgramById(id: any) {
    try {
      const program = await this.academicProgramRepository.findOne({ where: { id } });
      if (!program) {
        throw new NotFoundException('Academic program not found');
      }
      return program;
    } catch (error) {
      throw error;
    }
  }

  async createAcademicProgram(dto: CreateAcademicProgramDto) {
    try {
      const program = this.academicProgramRepository.create(dto);
      return await this.academicProgramRepository.save(program);
    } catch (error) {
      throw error;
    }
  }

  async updateAcademicProgram(id: any, dto: UpdateAcademicProgramDto) {
    try {
      if (!id) {
        throw new NotFoundException('Academic program id is required');
      }
      const program = await this.academicProgramRepository.findOne({ where: { id } });
      if (!program) {
        throw new NotFoundException('Academic program not found');
      }
      Object.assign(program, dto);
      return await this.academicProgramRepository.save(program);
    } catch (error) {
      throw error;
    }
  }

  async deleteAcademicProgram(id: any) {
    try {
      const program = await this.academicProgramRepository.findOne({ where: { id } });
      if (!program) {
        throw new NotFoundException('Academic program not found');
      }
      return await this.academicProgramRepository.remove(program);
    } catch (error) {
      throw error;
    }
  }
}
