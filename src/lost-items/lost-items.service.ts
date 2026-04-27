import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LostItem } from './lost-item.entity';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';

@Injectable()
export class LostItemsService {
  constructor(
    @InjectRepository(LostItem)
    private lostItemsRepository: Repository<LostItem>,
  ) {}

  async create(dto: CreateLostItemDto): Promise<LostItem> {
    const lostItem = this.lostItemsRepository.create(dto);
    return this.lostItemsRepository.save(lostItem);
  }

  async findAll(): Promise<LostItem[]> {
    return this.lostItemsRepository.find({ relations: ['reportedBy'] });
  }

  async findOne(id: number): Promise<LostItem> {
    const item = await this.lostItemsRepository.findOne({
      where: { id },
      relations: ['reportedBy'],
    });
    if (!item) throw new NotFoundException(`Lost item #${id} not found`);
    return item;
  }

  async update(id: number, dto: UpdateLostItemDto): Promise<LostItem> {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.lostItemsRepository.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.lostItemsRepository.remove(item);
  }
}