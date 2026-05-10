import { Injectable } from '@nestjs/common';
import { CreateShortTermMemoryDto } from './dto/create-short-term-memory.dto';
import { UpdateShortTermMemoryDto } from './dto/update-short-term-memory.dto';

@Injectable()
export class ShortTermMemoryService {
  create(createShortTermMemoryDto: CreateShortTermMemoryDto) {
    return 'This action adds a new shortTermMemory';
  }

  findAll() {
    return `This action returns all shortTermMemory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortTermMemory`;
  }

  update(id: number, updateShortTermMemoryDto: UpdateShortTermMemoryDto) {
    return `This action updates a #${id} shortTermMemory`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortTermMemory`;
  }
}
