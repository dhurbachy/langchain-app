import { Test, TestingModule } from '@nestjs/testing';
import { MessageObjectController } from './message-object.controller';
import { MessageObjectService } from './message-object.service';

describe('MessageObjectController', () => {
  let controller: MessageObjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageObjectController],
      providers: [MessageObjectService],
    }).compile();

    controller = module.get<MessageObjectController>(MessageObjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
