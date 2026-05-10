import { Test, TestingModule } from '@nestjs/testing';
import { ShortTermMemoryController } from './short-term-memory.controller';
import { ShortTermMemoryService } from './short-term-memory.service';

describe('ShortTermMemoryController', () => {
  let controller: ShortTermMemoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortTermMemoryController],
      providers: [ShortTermMemoryService],
    }).compile();

    controller = module.get<ShortTermMemoryController>(ShortTermMemoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
