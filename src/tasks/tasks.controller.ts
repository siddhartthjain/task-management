import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common/decorators';

import { userInfo } from 'os';
import { title } from 'process';
import { CreateTaskdto } from './dto/createtask.dto';
import { taskfilterdto } from './dto/taskfilter.dto';
import { filterpipe } from './pipes/filterpipe';
import { taskvalidationpipe } from './pipes/Taskvalidationpipe';
import { task_contract } from './repositories/task_contract';
// import { Task, Taskstatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { task } from './Models/task_model';
import { Taskstatus } from 'src/task.status.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(
    private taskservice: TasksService,
    @Inject('task_repository') private task_repository: task_contract,
  ) {} //"task_repository" == provided on provider,variable = task_repository,task_contract == contract in repository

  @Get()
  getAlltasks(@Query(filterpipe) filter: taskfilterdto, @Req() req): Promise<task[]> {
   
   const user =req.user;
    return this.task_repository.getalltasks(filter, user);


  }

  @Post()
  //  @UsePipes(ValidationPipe)
  createTask(@Body() createtaskdto: CreateTaskdto, @Req() req): Promise<task> {
    const user = req.user;

    return this.task_repository.posttask(createtaskdto, user);
  }

  @Get('/:id')
  getTaskbyId(@Param('id', ParseIntPipe) id: number, @Req() req): Promise<task> {
    const user = req.user;
    return this.task_repository.getbyId(id, user);
  }
  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number, @Req() req) {
    const user = req.user;
    return this.task_repository.deletebyId(id, user);
  }
  @Patch('/:id')
  // @UsePipes(ValidationPipe)
  updateTaskstatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', taskvalidationpipe) status: Taskstatus,
    @Req() req
  ): Promise<task> {
    const user = req.user;
    return this.task_repository.updateTask(id, status, user);
  }
}
