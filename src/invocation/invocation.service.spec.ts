import { Test, TestingModule } from '@nestjs/testing';
import { InvocationService } from './invocation.service';

describe('InvocationService', () => {
  let service: InvocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvocationService],
    }).compile();

    service = module.get<InvocationService>(InvocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
