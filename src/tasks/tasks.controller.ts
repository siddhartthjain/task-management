import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Get, Inject, Param, Patch, Post, Query, UsePipes } from '@nestjs/common/decorators';
import { Knex } from 'knex';
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

@Controller('tasks')
export class TasksController {
    constructor (
      private taskservice: TasksService,
       @Inject("task_repository") private task_repository: task_contract ){}  //"task_repository" == provided on provider,variable = task_repository,task_contract == contract in repository 

    // @Get("/test")

    // async gettest()
    // {
    //   const data= await this.task_repository.function1()
    //   return data;
    // }
    

    @Get()
    
    getAlltasks( @Query(filterpipe) filter: taskfilterdto ): Promise<task[]>
    {
      
      
      
      // if(filter)
      // {    
        // console.log(filter);
        
       return this.task_repository.getalltasks(filter);
          
      // }
      // else{
      //    return  this.taskservice.getAlltasks();
      // }
      // return this.task_repository.getalltasks()
       
    }

    @Post()
    //  @UsePipes(ValidationPipe)
    createTask( @Body() createtaskdto: CreateTaskdto ): Promise<task>
    {
       return this.task_repository.posttask(createtaskdto);
       
    }

    @Get('/:id')
    getTaskbyId(@Param('id', ParseIntPipe) id:number): Promise<task>
    {

      return this.task_repository.getbyId(id);
    }
    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number)
    {
      return this.task_repository.deletebyId(id);
    }
    @Patch('/:id/status')
    // @UsePipes(ValidationPipe)
    updateTaskstatus(@Param('id', ParseIntPipe) id:number ,@Body('status', taskvalidationpipe) status: Taskstatus): Promise<task>
    {
      return this.task_repository.updateTask(id,status)
    }
}
