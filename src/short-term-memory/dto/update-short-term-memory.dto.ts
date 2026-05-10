import { PartialType } from '@nestjs/swagger';
import { CreateShortTermMemoryDto } from './create-short-term-memory.dto';

export class UpdateShortTermMemoryDto extends PartialType(CreateShortTermMemoryDto) {}
