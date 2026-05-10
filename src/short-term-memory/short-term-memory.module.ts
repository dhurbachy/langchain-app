import { Module } from '@nestjs/common';
import { ShortTermMemoryService } from './short-term-memory.service';
import { ShortTermMemoryController } from './short-term-memory.controller';

@Module({
  controllers: [ShortTermMemoryController],
  providers: [ShortTermMemoryService],
})
export class ShortTermMemoryModule {}
