import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TasksModule, DbModule, AuthModule],    //Db module is where we are setting the connection 
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
