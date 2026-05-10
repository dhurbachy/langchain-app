import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageObjectService } from './message-object.service';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';

@Controller('message-object')
export class MessageObjectController {
  constructor(private readonly messageObjectService: MessageObjectService) {}

  @Post()
  create(@Body() createMessageObjectDto: CreateMessageObjectDto) {
    return this.messageObjectService.create(createMessageObjectDto);
  }

  @Get()
  findAll() {
    return this.messageObjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageObjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageObjectDto: UpdateMessageObjectDto) {
    return this.messageObjectService.update(+id, updateMessageObjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageObjectService.remove(+id);
  }
}
