import { Module } from '@nestjs/common';
import { StructureOutputService } from './structure-output.service';
import { StructureOutputController } from './structure-output.controller';

@Module({
  providers: [StructureOutputService],
  controllers: [StructureOutputController]
})
export class StructureOutputModule {}
