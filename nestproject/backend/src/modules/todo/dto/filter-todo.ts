import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class FilterTodoDto {
  @IsString()
  @IsOptional()
  title?: string;
}
