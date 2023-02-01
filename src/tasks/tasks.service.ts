import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, Taskstatus } from './tasks.model';
import {v4 as uuid} from 'uuid'
import { CreateTaskdto } from './dto/createtask.dto';
import { taskfilterdto } from './dto/taskfilter.dto';

@Injectable()
export class TasksService {
    private tasks :Task[]=[];
     
    getAlltasks(): Task[]
    {
        return this.tasks;
    }
    getTaskbyFilter(filter: taskfilterdto):Task[]
    {
        const {status,search }= filter;
        let tasks= this.getAlltasks();
    //    console.log(status);
    //    console.log(search);
       
        if(status)
        {
            // console.log("hello");
          tasks=tasks.filter((t)=>{return t.status===status}) 
        }
        if(search)
        {
            // console.log("hello in search" );
            
            tasks= tasks.filter((t)=>{return t.title.includes(search)|| t.description.includes(search)})
        }
        return tasks;
    }
    createTask(createtaskdto: CreateTaskdto) :Task
    {
        const {title, description}= createtaskdto
        const task: Task={
            id : uuid(),
            title, 
            description,
            status: Taskstatus.OPEN
        }
        this.tasks.push(task);
        return task
      
    }
    getTaskbyId(id:string):Task{
         const ind= this.tasks.findIndex((t)=>{ return t.id===id})
         if(ind===-1)
         {
            throw new NotFoundException;
         }
         else{
            return this.tasks[ind];
         }
        //  console.log(ind)
         
    }
    deleteTask(id: string)
    {
       const ind= this.tasks.findIndex((t)=>{return t.id===id})
       if(ind===-1)

       {
        throw new NotFoundException;
       }
       this.tasks.splice(ind,1);
       return ;
    }
    updateTaskstatus(id: string, status: Taskstatus): Task
    {
        const task= this.getTaskbyId(id);
        if(task)
        {                    
        task.status= status;
        return task;
        }
        else{
            throw new NotFoundException;
        }
    }
}
