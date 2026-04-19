import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './claims.entity';
import { CreateClaimDto } from './create-claim.dto';

@Injectable()
export class ClaimsService {
  constructor(
    @InjectRepository(Claim)
    private readonly claimsRepository: Repository<Claim>,
  ) {}

  // Create a new claim
  async create(createClaimDto: CreateClaimDto): Promise<Claim> {
    const newClaim = this.claimsRepository.create(createClaimDto);
    return await this.claimsRepository.save(newClaim);
  }

  // Get all claims (for Admin to review)
  async findAll(): Promise<Claim[]> {
    return await this.claimsRepository.find({
      relations: ['user', 'foundItem'], // This pulls the related data from other tables
    });
  }

  // Get one specific claim by ID
  async findOne(id: number): Promise<Claim> {
    const claim = await this.claimsRepository.findOne({
      where: { id },
      relations: ['user', 'foundItem'],
    });
    if (!claim) {
      throw new NotFoundException(`Claim with ID ${id} not found`);
    }
    return claim;
  }

  // Update claim status (e.g., 'approved' or 'rejected')
  async updateStatus(id: number, status: string): Promise<Claim> {
    const claim = await this.findOne(id);
    claim.status = status;
    return await this.claimsRepository.save(claim);
  }
}
