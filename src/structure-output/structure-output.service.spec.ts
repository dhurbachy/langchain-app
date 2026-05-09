import { Test, TestingModule } from '@nestjs/testing';
import { StructureOutputService } from './structure-output.service';

describe('StructureOutputService', () => {
  let service: StructureOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructureOutputService],
    }).compile();

    service = module.get<StructureOutputService>(StructureOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
