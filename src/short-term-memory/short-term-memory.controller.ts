import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortTermMemoryService } from './short-term-memory.service';
import { CreateShortTermMemoryDto } from './dto/create-short-term-memory.dto';
import { UpdateShortTermMemoryDto } from './dto/update-short-term-memory.dto';

@Controller('short-term-memory')
export class ShortTermMemoryController {
  constructor(private readonly shortTermMemoryService: ShortTermMemoryService) {}

  @Post()
  create(@Body() createShortTermMemoryDto: CreateShortTermMemoryDto) {
    return this.shortTermMemoryService.create(createShortTermMemoryDto);
  }

  @Get()
  findAll() {
    return this.shortTermMemoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortTermMemoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortTermMemoryDto: UpdateShortTermMemoryDto) {
    return this.shortTermMemoryService.update(+id, updateShortTermMemoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortTermMemoryService.remove(+id);
  }
}
