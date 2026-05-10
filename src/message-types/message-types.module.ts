import { Module } from '@nestjs/common';
import { MessageTypesService } from './message-types.service';
import { MessageTypesController } from './message-types.controller';

@Module({
  controllers: [MessageTypesController],
  providers: [MessageTypesService],
})
export class MessageTypesModule {}
