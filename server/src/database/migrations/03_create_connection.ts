import Knex from 'knex'

export async function up(knex: Knex) { // Aqui eu faço as alterações
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at') // Quando essa conexão foi criada
            .defaultTo(knex.raw('CURRENT_TIMESTAMP')) // CURRENT_TIMESTAMP pega o horário atual que este registro está sendo criado e salva no campo 'created_at'
            .notNullable()
    })
}

export async function down(knex: Knex) { // E aqui eu desfaço
    return knex.schema.dropTable('connections')
}