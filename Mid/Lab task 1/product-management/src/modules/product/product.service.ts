import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id: any) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  async createProduct(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id: any, dto: UpdateProductDto) {
    try {
      if (!id) {
        throw new NotFoundException('Product id is required');
      }
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      Object.assign(product, dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: any) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException('Product not found');
      }
      return await this.productRepository.remove(product);
    } catch (error) {
      throw error;
    }
  }
}
