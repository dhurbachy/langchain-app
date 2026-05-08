import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvocationService } from './invocation.service';
import { CreateInvocationDto } from './dto/create-invocation.dto';
import { UpdateInvocationDto } from './dto/update-invocation.dto';

@Controller('invocation')
export class InvocationController {
  constructor(private readonly invocationService: InvocationService) {}

  @Post()
  create(@Body() createInvocationDto: CreateInvocationDto) {
    return this.invocationService.create(createInvocationDto);
  }

  

 
}
