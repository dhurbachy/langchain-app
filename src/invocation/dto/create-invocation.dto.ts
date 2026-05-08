import { ApiProperty } from '@nestjs/swagger'; // Since you are using Swagger
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInvocationDto {
  @ApiProperty({ 
    example: 'Explain quantum physics to a five year old',
    description: 'The text prompt to send to Gemma' 
  })
  @IsString()
  @IsNotEmpty()
  prompt!: string;

  // Optional: If you want to allow changing models on the fly
  @ApiProperty({ example: 'gemma:2b', required: false })
  modelName?: string;
}
