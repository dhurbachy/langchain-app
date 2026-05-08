import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { InvocationService } from './invocation.service';
import { CreateInvocationDto } from './dto/create-invocation.dto';
import { UpdateInvocationDto } from './dto/update-invocation.dto';
import * as fastify from 'fastify';


@Controller('invocation')
export class InvocationController {
  constructor(private readonly invocationService: InvocationService) { }

  @Post()
  create(@Body() createInvocationDto: CreateInvocationDto) {
    return this.invocationService.create(createInvocationDto);
  }

  @Post('basic-invoke')
  basicInvoke(@Body() createInvocationDto: CreateInvocationDto) {
    return this.invocationService.basicInvoke(createInvocationDto);
  }
  @Post('stream-invoke')
  async streamInvoke(@Body() CreateInvocationDto: CreateInvocationDto, @Res() res: fastify.FastifyReply) {
    const stream = await this.invocationService.streamInvoke(CreateInvocationDto);
    // Set headers for streaming
    res.raw.setHeader('Content-Type', 'text/event-stream');
    res.raw.setHeader('Cache-Control', 'no-cache');
    res.raw.setHeader('Connection', 'keep-alive');

    stream.pipe(res.raw);
  }




}
