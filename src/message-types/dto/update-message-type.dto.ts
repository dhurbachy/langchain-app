import { PartialType } from '@nestjs/swagger';
import { CreateMessageTypeDto } from './create-message-type.dto';

export class UpdateMessageTypeDto extends PartialType(CreateMessageTypeDto) {}
