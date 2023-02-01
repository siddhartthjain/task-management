import { Controller, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Query, UsePipes } from '@nestjs/common/decorators';
import { userInfo } from 'os';
import { title } from 'process';
import { CreateTaskdto } from './dto/createtask.dto';
import { taskfilterdto } from './dto/taskfilter.dto';
import { filterpipe } from './pipes/filterpipe';
import { taskvalidationpipe } from './pipes/Taskvalidationpipe';
import { Task, Taskstatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor (private taskservice: TasksService){}

    @Get()
    
    getAlltasks( @Query(ValidationPipe, filterpipe) filter: taskfilterdto ): Task[]
    {
      
      if(filter && Object.keys(filter).length)
      {    
       return this.taskservice.getTaskbyFilter(filter);
      }
      else{
         return  this.taskservice.getAlltasks();
      }
       
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask( @Body() createtaskdto: CreateTaskdto ): Task
    {
       return this.taskservice.createTask(createtaskdto);
       
    }

    @Get('/:id')
    getTaskbyId(@Param('id') id:string): Task
    {
      return this.taskservice.getTaskbyId(id);
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string)
    {
      return this.taskservice.deleteTask(id);
    }
    @Patch('/:id/status')
    @UsePipes(ValidationPipe)
    updateTaskstatus(@Param('id') id:string ,@Body('status', taskvalidationpipe) status: Taskstatus): Task
    {
      return this.taskservice.updateTaskstatus(id,status);
    }
}
