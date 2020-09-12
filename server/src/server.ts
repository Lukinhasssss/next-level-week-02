import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)

/*
        MÉTODOS:

    GET: Buscar ou listar uma informação;
    POST: Criar alguma nova informação dentro do back-end;
    PUT: Atualizar uma informação já existente;
    DELETE: Deletar uma informação já existente;

    Corpo (Request Body): Dados para criação ou atualização de um registro.
    Route Params: Serve para indentificar qual recurso eu quero atualizar ou deletar
    Query Params: Paginação, filtro, ordenação...
    --------------------------------------------------------------------------------

    Dentro do request a gente vai obter informações sobre a requisição como por exemplo, o cabeçalho e o corpo. Quando eu
    crio um usuário é dentro desse request que eu vou ter o nome do usuário, o email, a senha...os dados que estão vindo
    pra mim pelo front-end. RESPONSE é a resposta que eu vou devolver da minha API (do back-end) para o front-end.

*/