import { Injectable } from '@nestjs/common';
import { CreateMessageTypeDto } from './dto/create-message-type.dto';
import { UpdateMessageTypeDto } from './dto/update-message-type.dto';

@Injectable()
export class MessageTypesService {
  create(createMessageTypeDto: CreateMessageTypeDto) {
    return 'This action adds a new messageType';
  }

  findAll() {
    return `This action returns all messageTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageType`;
  }

  update(id: number, updateMessageTypeDto: UpdateMessageTypeDto) {
    return `This action updates a #${id} messageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageType`;
  }
}
