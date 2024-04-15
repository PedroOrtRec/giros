import { Test, TestingModule } from '@nestjs/testing';
import { ThrowsService } from './throws.service';

describe('ThrowsService', () => {
  let service: ThrowsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThrowsService],
    }).compile();

    service = module.get<ThrowsService>(ThrowsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
