import { Test, TestingModule } from '@nestjs/testing';
import { ShortTermMemoryService } from './short-term-memory.service';

describe('ShortTermMemoryService', () => {
  let service: ShortTermMemoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortTermMemoryService],
    }).compile();

    service = module.get<ShortTermMemoryService>(ShortTermMemoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
