import { Injectable } from '@nestjs/common';
import { CreateInvocationDto } from './dto/create-invocation.dto';
import { UpdateInvocationDto } from './dto/update-invocation.dto';
import { CommonAiService } from 'src/common-ai/common-ai.service';
import { Logger } from '@nestjs/common'
import { PassThrough } from 'stream';

@Injectable()
export class InvocationService {
  private readonly logger = new Logger(InvocationService.name);
  constructor(private readonly ai: CommonAiService) { }
  create(createInvocationDto: CreateInvocationDto) {
    return 'This action adds a new invocation';
  }

  async basicInvoke(createInvocationDto: CreateInvocationDto) {
    const response = await this.ai.chat(createInvocationDto.prompt)
    return response;
  }

  async streamInvoke(createInvocationDto: CreateInvocationDto) {
    const stream = new PassThrough();
    (async () => {
      try {
        const responseStream = await this.ai.model.stream(createInvocationDto.prompt);
        for await (const chunk of responseStream){
          stream.write(chunk);
        }
      } catch (error: any) {
        this.logger.error('Streaming error', error);
      }
      finally {
        stream.end();
      }
    })();
    return stream;
  }


}
