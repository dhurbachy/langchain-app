import { Test, TestingModule } from '@nestjs/testing';
import { StructureOutputController } from './structure-output.controller';

describe('StructureOutputController', () => {
  let controller: StructureOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StructureOutputController],
    }).compile();

    controller = module.get<StructureOutputController>(StructureOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
