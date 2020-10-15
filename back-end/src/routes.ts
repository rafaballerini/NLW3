import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadconfig from './config/upload';

const routes = Router();
const upload = multer(uploadconfig);

//Model - Views - Controllers
//index, show, crete, update, delete

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

export default routes;