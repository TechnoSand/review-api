import { Router } from 'express';
import reviewController from './controllers/ReviewController.js';


const routes = new Router();

routes.get('/', reviewController.getAll);           
routes.get('/:treinamentoId', reviewController.showByTreinamento);     
routes.post('/', reviewController.store);   
routes.delete('/:treinamentoId', reviewController.destroyTreinamento);  

export default routes;