import { Module } from '@nestjs/common';
import { InvocationService } from './invocation.service';
import { InvocationController } from './invocation.controller';

@Module({
  controllers: [InvocationController],
  providers: [InvocationService],
})
export class InvocationModule {}
