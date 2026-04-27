import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimsService } from './claims.service';
import { ClaimsController } from './claims.controller';
import {Claim} from './claims.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Claim])],
  providers: [ClaimsService],
  controllers: [ClaimsController],
})
export class ClaimsModule {}
