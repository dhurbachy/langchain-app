import { Module } from '@nestjs/common';
import { MessageObjectService } from './message-object.service';
import { MessageObjectController } from './message-object.controller';

@Module({
  controllers: [MessageObjectController],
  providers: [MessageObjectService],
})
export class MessageObjectModule {}
