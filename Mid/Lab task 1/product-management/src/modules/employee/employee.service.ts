import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async getEmployees() {
    try {
      return await this.employeeRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getEmployeeById(id: any) {
    try {
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      return employee;
    } catch (error) {
      throw error;
    }
  }

  async createEmployee(dto: CreateEmployeeDto) {
    try {
      const employee = this.employeeRepository.create(dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async updateEmployee(id: any, dto: UpdateEmployeeDto) {
    try {
      if (!id) {
        throw new NotFoundException('Employee id is required');
      }
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      Object.assign(employee, dto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployee(id: any) {
    try {
      const employee = await this.employeeRepository.findOne({ where: { id } });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      return await this.employeeRepository.remove(employee);
    } catch (error) {
      throw error;
    }
  }
}
