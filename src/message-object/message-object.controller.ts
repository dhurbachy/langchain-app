import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageObjectService } from './message-object.service';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('message-object')
export class MessageObjectController {
  constructor(private readonly messageObjectService: MessageObjectService) { }

  @Post()
  create(@Body() createMessageObjectDto: CreateMessageObjectDto) {
    return this.messageObjectService.create(createMessageObjectDto);
  }

  @Post('text-prompt')
  @ApiBody({
    description: 'A single message object for a simple text prompt',
    type: CreateMessageObjectDto,
    examples: {
      singlePrompt: {
        summary: 'Simple User Question',
        value: {
          "role": "user",
          "content": "What is the capital of Nepal?"
        }
      }
    }
  })
  textPrompt(@Body() createMessageObjectDto: CreateMessageObjectDto) {
    return this.messageObjectService.textPrompt(createMessageObjectDto);
  }

  @Post('message-prompt')
  @ApiBody({
    description: 'A list of message objects for chat context',
    type: [CreateMessageObjectDto], // Tells Swagger it is an array
    examples: {
      example1: {
        summary: 'Software Architect Example',
        value: [
          {
            "role": "system",
            "content": "You are a helpful software architect. Explain concepts clearly and concisely."
          },
          {
            "role": "user",
            "content": "What is the difference between a Text Prompt and a Message Object in AI?"
          }
        ]
      }
    }
  })
  messagePrompt(@Body() createMessageObjectDto: CreateMessageObjectDto[]) {
    return this.messageObjectService.messagePrompt(createMessageObjectDto);
  }
  @Post('dictionary')
  @ApiBody({
    description: 'Converts a list of messages into a dictionary-style key-value format',
    type: [CreateMessageObjectDto],
    examples: {
      dictionaryStyle: {
        summary: 'Dictionary Mapping Example',
        value: [
          { "role": "system", "content": "You are a translator." },
          { "role": "user", "content": "Translate 'Hello' to Spanish." }
        ]
      }
    }
  })
  dictionaryFormat(@Body() createMessageObjectDto: CreateMessageObjectDto[]) {
    return this.messageObjectService.dictionaryFormat(createMessageObjectDto);
  }
}
