import { Module } from '@nestjs/common';
import { task_repository } from './repositories/database';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, {
    provide: "task_database_connect",
    useClass: task_repository
  }]
})
export class TasksModule {}
