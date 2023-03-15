// import type { Knex } from "knex";
import {Knex} from "knex";
// import { dirname } from "path";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'admin',
      database: 'task_database',
    },
    migrations: {
      directory: __dirname + '/src/database/migrations',
      extension: 'ts',
    },
    seeds: {
      directory: __dirname + '/src/database/seeds',
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host:"awseb-e-subv2ibfr8-stack-awsebrdsdatabase-xwclk15kp5h5.cqstehnlbdqp.us-east-2.rds.amazonaws.com",
              port:3306,
          
              user: "root",
              password: "Password&123",
              database:"ebdb"

    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/src/database/migrations',
      extension: 'ts',
    }
  }

};

module.exports = config;