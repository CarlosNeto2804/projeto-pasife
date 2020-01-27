import {Router} from 'express';
import UserController from '../controllers/UserController';

const routes = Router();
routes.get('/',(request, response)=>{
  return response.send({
    project: 'Servidor Pasife',
    version: '1.0',
    author: 'C. A. Tecnologia'
  });
});
    
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);


export default routes;