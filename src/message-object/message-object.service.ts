import { Injectable,Logger } from '@nestjs/common';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';
import { CommonAiService } from 'src/common-ai/common-ai.service';
import { SystemMessage,HumanMessage,AIMessage,BaseMessage } from '@langchain/core/messages';

@Injectable()
export class MessageObjectService {
  constructor(private readonly ai:CommonAiService){}
  create(createMessageObjectDto: CreateMessageObjectDto) {
    return 'This action adds a new messageObject';
  }

  async textPrompt(createMessageObjectDto: CreateMessageObjectDto) {
    return await this.ai.model.invoke(createMessageObjectDto.content);
  }

  async messagePrompt(createMessageObjectDto: CreateMessageObjectDto[]) {
    const messages:BaseMessage[]=createMessageObjectDto.map(dto=>{
      // if(dto.role==='system') return new SystemMessage(dto.content);
      // if(dto.role==='user') return new HumanMessage(dto.content);
      // return new HumanMessage(dto.content);
      switch(dto.role){
        case 'system':return new SystemMessage(dto.content);
        case 'user':return new HumanMessage(dto.content);
        default :return new HumanMessage(dto.content);
      }

    });
    const response=await this.ai.model.invoke(messages as any);
    return response;
  }
  async dictionaryFormat(createMessageObjectDto: CreateMessageObjectDto) {
    return await `dictionary format`;
  }
}
