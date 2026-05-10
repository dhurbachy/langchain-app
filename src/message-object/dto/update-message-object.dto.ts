import { PartialType } from '@nestjs/swagger';
import { CreateMessageObjectDto } from './create-message-object.dto';

export class UpdateMessageObjectDto extends PartialType(CreateMessageObjectDto) {}
