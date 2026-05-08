import { Injectable } from '@nestjs/common';
import { CreateInvocationDto } from './dto/create-invocation.dto';
import { UpdateInvocationDto } from './dto/update-invocation.dto';

@Injectable()
export class InvocationService {
  create(createInvocationDto: CreateInvocationDto) {
    return 'This action adds a new invocation';
  }

  findAll() {
    return `This action returns all invocation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invocation`;
  }

  update(id: number, updateInvocationDto: UpdateInvocationDto) {
    return `This action updates a #${id} invocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} invocation`;
  }
}
