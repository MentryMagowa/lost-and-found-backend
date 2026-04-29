import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoundItem } from './entities/found-item.entity';
import { CreateFoundItemDto } from './dto/create-found-item.dto';
import { UpdateFoundItemDto } from './dto/update-found-item.dto';

@Injectable()
export class FoundItemsService {
  constructor(
    @InjectRepository(FoundItem)
    private foundItemRepository: Repository<FoundItem>,
  ) {}

  // Create with JSON (no file)
  async create(createDto: CreateFoundItemDto): Promise<FoundItem> {
    const item = this.foundItemRepository.create({
      ...createDto,
      status: createDto.status || 'pending',
    });
    return await this.foundItemRepository.save(item);
  }

  // Create with uploaded file
  async createWithFile(createDto: CreateFoundItemDto, file: Express.Multer.File): Promise<FoundItem> {
    const imageUrl = file ? `/uploads/found-items/${file.filename}` : undefined;
    const item = this.foundItemRepository.create({
      ...createDto,
      dateFound: createDto.dateFound ? new Date(createDto.dateFound) : undefined,
      status: createDto.status || 'pending',
      imageUrl,
    });
    return await this.foundItemRepository.save(item);
  }

  async findAll(): Promise<FoundItem[]> {
    return await this.foundItemRepository.find();
  }

  async findOne(id: string): Promise<FoundItem> {
    const item = await this.foundItemRepository.findOne({where:{id}});
    if (!item) {
      throw new NotFoundException(`Found item with ID ${id} not found`);
    }
    return item;
  }

  async update(id: string, updateFoundDto: UpdateFoundItemDto): Promise<FoundItem> {
    const item = await this.findOne(id);
    //if (updateFoundDto.dateFound) {
      //updateFoundDto.dateFound = new Date(updateFoundDto.dateFound);
    //}
    Object.assign(item, updateFoundDto);
    return await this.foundItemRepository.save(item);
  }

  async updateWithFile(id: string, updateFoundDto: UpdateFoundItemDto, file: Express.Multer.File): Promise<FoundItem> {
    const item = await this.findOne(id);
    if (file) {
      item.imageUrl = `/uploads/found-item/${file.filename}`;
    }
    //if (updateFoundDto.dateFound) {
    //  updateFoundDto.dateFound = new Date(updateFoundDto.dateFound);
    //}
    Object.assign(item, updateFoundDto);
    return await this.foundItemRepository.save(item);
  }

  async remove(id: number): Promise<void> {
    const result = await this.foundItemRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Found item with ID ${id} not found`);
    }
  }
}
