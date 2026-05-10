import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageObjectService } from './message-object.service';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';

@Controller('message-object')
export class MessageObjectController {
  constructor(private readonly messageObjectService: MessageObjectService) { }

  @Post()
  create(@Body() createMessageObjectDto: CreateMessageObjectDto) {
    return this.messageObjectService.create(createMessageObjectDto);
  }

  @Post('text-prompt')
  textPrompt(@Body() createMessageObjectDto: CreateMessageObjectDto) {
    return this.messageObjectService.textPrompt(createMessageObjectDto);
  }

  // @Post()
  // messagePrompt(@Body() createMessageObjectDto: CreateMessageObjectDto) {
  //   return this.messageObjectService.messagePrompt(createMessageObjectDto);
  // }
  // @Post()
  // dictionaryFormat(@Body() createMessageObjectDto: CaretPosition) {
  //   return this.messageObjectService.dictionaryFormat(createMessageObjectDto);
  // }
}
