import { Test, TestingModule } from '@nestjs/testing';
import { InvocationController } from './invocation.controller';
import { InvocationService } from './invocation.service';

describe('InvocationController', () => {
  let controller: InvocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvocationController],
      providers: [InvocationService],
    }).compile();

    controller = module.get<InvocationController>(InvocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
