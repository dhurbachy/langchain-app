import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvocationModule } from './invocation/invocation.module';
import { CommonAiModule } from './common-ai/common-ai.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [InvocationModule, CommonAiModule],
})
export class AppModule {}
