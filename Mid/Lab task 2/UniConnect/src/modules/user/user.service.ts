import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    try {
      const users = await this.userRepository.find();
      return users.map(({ passwordHash, ...user }) => user);
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: any) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const { passwordHash, ...sanitized } = user;
      return sanitized;
    } catch (error) {
      throw error;
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      const passwordHash = await argon2.hash(dto.password);
      const user = this.userRepository.create({
        fullName: dto.fullName,
        email: dto.email,
        accountType: dto.accountType,
        passwordHash,
      });
      const saved = await this.userRepository.save(user);
      const { passwordHash: _, ...sanitized } = saved;
      return sanitized;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: any, dto: UpdateUserDto) {
    try {
      if (!id) {
        throw new NotFoundException('User id is required');
      }
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (dto.password) {
        user.passwordHash = await argon2.hash(dto.password);
      }
      if (dto.fullName) user.fullName = dto.fullName;
      if (dto.email) user.email = dto.email;
      if (dto.accountType) user.accountType = dto.accountType;

      const updated = await this.userRepository.save(user);
      const { passwordHash, ...sanitized } = updated;
      return sanitized;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: any) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return await this.userRepository.remove(user);
    } catch (error) {
      throw error;
    }
  }
}
