import { Module } from '@nestjs/common';
import { InvocationService } from './invocation.service';
import { InvocationController } from './invocation.controller';
import { CommonAiModule } from 'src/common-ai/common-ai.module';

@Module({
  imports:[CommonAiModule],
  controllers: [InvocationController],
  providers: [InvocationService],
})
export class InvocationModule {}
