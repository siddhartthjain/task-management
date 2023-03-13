import { Knex, knex } from 'knex';
import { Model } from 'objection';
import { BaseModel } from './BaseModel';
// import {config} from '../../knexfile'
// import { BaseModel } from './db/BaseModel';

export const databaseProviders = [
  {
    
      

    provide: 'DATABASE_CONNECTION',
    imports: [],
    useFactory: async () => {
      let knex_connection;
      if(process.env.NODE_ENV==='production')
      {
         knex_connection= knex(
          {
            client:'mysql',
            connection:
            {
              database: "task_database",
              user: "root",
              password: "Password&123"

            }
          }
        )
      }
      else{
        knex_connection = knex(
        {
        client: 'mysql',
        connection: {
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: 'admin',
          database: 'task_database',
        },
      }
     
      
      );
      }
      
      BaseModel.knex(knex_connection);
      BaseModel.setModulePaths([
        
        // you have to write here your folder name of new module because it create automatic path in defing relation mapping 
        'auth',
        'tasks'
      ]);
  
      return knex_connection;
    },
  },
];