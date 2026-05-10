import { Injectable } from '@nestjs/common';
import { CreateMessageObjectDto } from './dto/create-message-object.dto';
import { UpdateMessageObjectDto } from './dto/update-message-object.dto';

@Injectable()
export class MessageObjectService {
  create(createMessageObjectDto: CreateMessageObjectDto) {
    return 'This action adds a new messageObject';
  }

  findAll() {
    return `This action returns all messageObject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageObject`;
  }

  update(id: number, updateMessageObjectDto: UpdateMessageObjectDto) {
    return `This action updates a #${id} messageObject`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageObject`;
  }
}
