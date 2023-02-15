import { Test, TestingModule } from '@nestjs/testing';
import { ProdService } from './prod.service';

describe('ProdService', () => {
  let service: ProdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdService],
    }).compile();

    service = module.get<ProdService>(ProdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
