import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvocationModule } from './invocation/invocation.module';
import { CommonAiModule } from './common-ai/common-ai.module';
import { StructureOutputModule } from './structure-output/structure-output.module';
import { MessageObjectModule } from './message-object/message-object.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [InvocationModule, CommonAiModule, StructureOutputModule, MessageObjectModule],
})
export class AppModule {}
