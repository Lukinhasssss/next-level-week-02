import Knex from 'knex'

export async function up(knex: Knex) { // Aqui eu faço as alterações
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()
    })
}

export async function down(knex: Knex) { // E aqui eu desfaço
    return knex.schema.dropTable('users')
}