import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { task_repository } from './repositories/task_repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports:[  AuthModule],
  controllers: [TasksController],
  providers: [TasksService, {
    provide: "task_repository",
    useClass: task_repository
  }]
})
export class TasksModule {}
