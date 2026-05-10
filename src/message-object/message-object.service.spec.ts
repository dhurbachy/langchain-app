import { Test, TestingModule } from '@nestjs/testing';
import { MessageObjectService } from './message-object.service';

describe('MessageObjectService', () => {
  let service: MessageObjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageObjectService],
    }).compile();

    service = module.get<MessageObjectService>(MessageObjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
