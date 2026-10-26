import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityController } from './university.controller';
import { UniversityService } from './university.service';
import { Department } from './entities/department.entity';
import { AcademicProgram } from './entities/academic-program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, AcademicProgram])],
  controllers: [UniversityController],
  providers: [UniversityService],
  exports: [UniversityService],
})
export class UniversityModule {}
