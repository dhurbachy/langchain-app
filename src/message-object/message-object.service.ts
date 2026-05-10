import { Injectable,Logger } from '@nestjs/common';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';
import { CommonAiService } from 'src/common-ai/common-ai.service';

@Injectable()
export class MessageObjectService {
  constructor(private readonly ai:CommonAiService){}
  create(createMessageObjectDto: CreateMessageObjectDto) {
    return 'This action adds a new messageObject';
  }

  async textPrompt(createMessageObjectDto: CreateMessageObjectDto) {
    return await this.ai.model.invoke(createMessageObjectDto.content);
  }

  async messagePrompt(createMessageObjectDto: CreateMessageObjectDto) {
    return await `Message Prompt`;
  }
  async dictionaryFormat(createMessageObjectDto: CreateMessageObjectDto) {
    return await `dictionary format`;
  }
}
