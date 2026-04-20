import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClaimsService } from './claims.service';
import { Claim } from './claims.entity';

describe('ClaimsService', () => {
  let service: ClaimsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaimsService,
         {
        provide: getRepositoryToken(Claim),
        useValue: {}, 
      },
      ],
    }).compile();

    service = module.get<ClaimsService>(ClaimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
