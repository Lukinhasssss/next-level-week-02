import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db;

/*
        MIGRATIONS:

    Controlam a versão do banco de dados, mais ou menos como o git faz

*/