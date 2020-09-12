import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable() // Matéria
        table.decimal('cost').notNullable() // Custo da hora/aula

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users') // Gera uma FK (Foreign Key) relacionando esta tabela com a tabela users
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}