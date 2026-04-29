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

  async create(createDto: CreateFoundItemDto): Promise<FoundItem> {
    const item = this.foundItemRepository.create({
      ...createDto,
      dateFound: new Date(createDto.dateFound),
      status: createDto.status || 'pending',
    });

    return await this.foundItemRepository.save(item);
  }

  async findAll(): Promise<FoundItem[]> {
    return await this.foundItemRepository.find();
  }

  async findOne(id: number): Promise<FoundItem> {
    const item = await this.foundItemRepository.findOne({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`Found item with ID ${id} not found`);
    }

    return item;
  }

  async update(id: number, updateDto: UpdateFoundItemDto): Promise<FoundItem> {
    const item = await this.findOne(id);

    Object.assign(item, {
      ...updateDto,
      dateFound: updateDto.dateFound
        ? new Date(updateDto.dateFound)
        : item.dateFound,
    });

    return await this.foundItemRepository.save(item);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.foundItemRepository.delete(id);

    return {
      message: `Found item ${id} deleted successfully`,
    };
  }
}
