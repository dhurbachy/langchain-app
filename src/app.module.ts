import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvocationModule } from './invocation/invocation.module';
import { CommonAiModule } from './common-ai/common-ai.module';
import { StructureOutputModule } from './structure-output/structure-output.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [InvocationModule, CommonAiModule, StructureOutputModule],
})
export class AppModule {}
