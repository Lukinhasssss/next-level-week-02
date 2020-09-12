import Knex from 'knex'

export async function up(knex: Knex) { // Aqui eu faço as alterações
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()

        table.integer('week_day').notNullable()
        table.integer('from').notNullable() // Que horas o professor vai começar a dar aulas
        table.integer('to').notNullable() // Até que horas o professor da aulas

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) { // E aqui eu desfaço
    return knex.schema.dropTable('class_schedule')
}