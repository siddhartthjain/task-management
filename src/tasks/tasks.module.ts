import { Module } from '@nestjs/common';
import { task_repository } from './repositories/task_repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, {
    provide: "task_repository",
    useClass: task_repository
  }]
})
export class TasksModule {}
