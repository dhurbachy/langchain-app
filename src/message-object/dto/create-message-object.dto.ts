import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsIn, IsNotEmpty } from "class-validator";
export class CreateMessageObjectDto {
    @ApiProperty({
        example: 'user',
        description: 'The Role of the message sender (system, user, assistant)',
        enum: ['system', 'user', 'assistant']
    })
    @IsNotEmpty()
    @IsString()
    role!: string;

    @ApiProperty({
        example: 'How does photosynthesis work?',
        description: 'The actual content of the message'
    })
    @IsString()
    @IsNotEmpty()
    content!: string;

}
