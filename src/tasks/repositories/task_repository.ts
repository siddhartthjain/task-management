import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "src/helper/helper";   // inject model is from helper
import { Taskstatus } from "src/task.status.enum";
import { threadId } from "worker_threads";
import { CreateTaskdto } from "../dto/createtask.dto";
import { taskfilterdto } from "../dto/taskfilter.dto";
import { task} from "../Models/task_model";
import { task_contract } from "./task_contract";

@Injectable()
export class task_repository implements task_contract
{
    // getalltask(): Promise<task[]> {
    //     throw new Error("Method not implemented.");
    // }
    

    // not getting its use??

    // @InjectModel(task)
    // model: task;
    


  
    async getalltasks(filter: taskfilterdto): Promise<task[]>
    {
        try {
            
            let tasks= task.query();
              const {status, search}= filter;
             
            //  console.log("hello");
             
            //   console.log(search)
              if(status!==undefined)
              {
                // console.log("im here");
                 tasks= tasks.where("status",status);
              }
              if(search!==undefined)
              {
                // console.log("failure");
                tasks= tasks.where("title","like",`%${search}%`).orWhere("description","like",`%${search}%`);
              }
            


            
            let task3= await tasks
            return task3;
            
        } catch (error) {
            return error.message;
        }
    }


    async posttask(createtaskdto: CreateTaskdto): Promise<task> {
        try {
            const newTask= new task;
            const {title, description}= createtaskdto;
            newTask.title= title;
            newTask.description= description;
            newTask.status= Taskstatus.OPEN;
            const todo= await task.query().insert(newTask);
            console.log("updated");
        return todo

        } catch (error) {
           
        }
        
        
    }

    async getbyId(id: number): Promise<task> {
        try {
            
            console.log("i m here");
            
            const todo = await task.query().findById(id);
            console.log(todo);
            
            if(!todo)
            {
                console.log("nothing in todo");
                throw new Error(`${id} doesnot exist in database`)
                
            }
            console.log("returning somethin");
            
            return todo; 
        } catch (error) {
            return error.message
             
        }
    }

    async updateTask(id: number, status: Taskstatus): Promise<any> {
        try {
            const todo =  await task.query().findById(id).patch({status})
            if(!todo)
            {
                throw new NotFoundException(`${id} doesnt not exist in database`);
            }
            return todo;

        } catch (error) {
            return error.message
        }
    }
   
    async deletebyId(id: number)
    {
        try {
            const noofrows=await task.query().deleteById(id)
             if(noofrows==0)
             {
                return {message:` task with ${id} is not present`}
             }
             else
             {
                return {message:` task with ${id} is deleted`}
             }
        } catch (error) {
            console.error(error);
        }
    }

}