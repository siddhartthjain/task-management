// this is migration and can be done only with knex


import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('task_table', table => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('status').notNullable();

    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTable('task_table')
}

