import { Test, TestingModule } from '@nestjs/testing';
import { CommonAiService } from './common-ai.service';

describe('CommonAiService', () => {
  let service: CommonAiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonAiService],
    }).compile();

    service = module.get<CommonAiService>(CommonAiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
