import { Module } from '@nestjs/common';
import { MessageObjectService } from './message-object.service';
import { MessageObjectController } from './message-object.controller';
import { CommonAiService } from 'src/common-ai/common-ai.service';

@Module({
  imports:[],
  controllers: [MessageObjectController],
  providers: [MessageObjectService,CommonAiService],
})
export class MessageObjectModule {}
