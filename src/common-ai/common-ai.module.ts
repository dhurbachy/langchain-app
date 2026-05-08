import { Module } from '@nestjs/common';
import { CommonAiService } from './common-ai.service';

@Module({
  providers: [CommonAiService],
  exports:[CommonAiService]
})
export class CommonAiModule {}
