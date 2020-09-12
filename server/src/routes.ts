import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()



routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes

// Recebe como primeiro parâmetro qual a tabela que será feita a inserção do dado
// Se uma operação falhar remove todas as outras que já foram feitas