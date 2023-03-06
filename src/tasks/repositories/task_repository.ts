import { HttpException, HttpStatus, Injectable, NotFoundException, Req } from '@nestjs/common';
import { User } from 'src/auth/Models/auth_model';
import { InjectModel } from 'src/helper/helper'; // inject model is from helper
import { Taskstatus } from 'src/task.status.enum';
import { threadId } from 'worker_threads';
import { CreateTaskdto } from '../dto/createtask.dto';
import { taskfilterdto } from '../dto/taskfilter.dto';
import { task } from '../Models/task_model';
import { task_contract } from './task_contract';

@Injectable()
export class task_repository implements task_contract {
  // getalltask(): Promise<task[]> {
  //     throw new Error("Method not implemented.");
  // }

  // not getting its use??

  // @InjectModel(task)
  // model: task;

  async getalltasks(filter: taskfilterdto, user:User): Promise<task[]> {
    try {
      let tasks = task.query().withGraphFetched('user').where('user_id',user.id);
      const { status, search } = filter;

      if (status !== undefined) {
        // console.log("im here");
        tasks = tasks.where('status', status);
      }
      if (search !== undefined) {
        // console.log("failure");
        tasks = tasks
          .where('title', 'like', `%${search}%`)
          .orWhere('description', 'like', `%${search}%`);
      }

      let task3 = await tasks;
      return task3;
    } catch (error) {
      return error.message;
    }
  }

  async posttask(createtaskdto: CreateTaskdto, user:User){
    try {
      const newTask = new task();
      const { title, description } = createtaskdto;
      newTask.title = title;
      newTask.description = description;
      newTask.status = Taskstatus.OPEN;
      newTask.user_id=user.id;
      const todo = await task.query().insert(newTask);
      console.log(newTask); 
      return todo;
    } catch (error) {}
  }

  async getbyId(id: number, user:User): Promise<task> {
    try {
      console.log('i m here');

      const todo = await task.query().findById(id).where('user_id',user.id);
      console.log(todo);

      if (!todo) {
        console.log('nothing in todo');
        throw new HttpException(`task with ${id} doesnt exist in database`, HttpStatus.NOT_FOUND)
      }
      console.log('returning somethin');

      return todo;
    } catch (error) {
      return error
    }
  }

  async updateTask(id: number, status: Taskstatus, user:User): Promise<any> {
    try {
      const todo = await task.query().findById(id).where('user_id', user.id).patch({ status });
      if (!todo) {
        throw new NotFoundException(`${id} doesnt not exist in database`);
      }
      console.log(todo)
      return todo;
    } catch (error) {
      return error.message;
    }
  }

  async deletebyId(id: number, user:User) {
    try {
      const noofrows = await task.query().where('user_id', user.id).deleteById(id);
      if (noofrows == 0) {
        return { message: ` task with ${id} is not present` };
      } else {
        return { message: ` task with ${id} is deleted` };
      }
    } catch (error) {
      console.error(error);
    }
  }
}
