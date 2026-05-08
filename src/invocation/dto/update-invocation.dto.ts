import { PartialType } from '@nestjs/swagger';
import { CreateInvocationDto } from './create-invocation.dto';

export class UpdateInvocationDto extends PartialType(CreateInvocationDto) {}
