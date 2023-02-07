import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { FilterTodoDto } from './dto/filter-todo';
import { TodoService } from './todo.service';
import { UserGuard } from '../user/user.guard';
import { UserID } from '../user/userid.decorator';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(@Query() filter: FilterTodoDto) {
    return this.todoService.getTodos(filter);
  }

  @Get(':id')
  getTodoById(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodoById(id);
  }

  @UseGuards(UserGuard)
  @Post()
  addNewTodo(@UserID() userId: number, @Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data, userId);
  }

  @UseGuards(UserGuard)
  @Delete(':id')
  removeTodo(@UserID() userId: number, @Param('id', ParseIntPipe) id: number) {
    return this.todoService.removeTodo(id, userId);
  }
}
