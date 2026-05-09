import { Module } from '@nestjs/common';
import { StructureOutputService } from './structure-output.service';

@Module({
  providers: [StructureOutputService]
})
export class StructureOutputModule {}
