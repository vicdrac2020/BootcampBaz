//Imports express
import { Router } from 'express';
//Imports controllers of health
import { peliculasDiscoverGET, peliculasSearchGET } from '../controller/peliculasController.js';
//Ruteo
const router = Router();
//Direcciones
router.get('/', peliculasDiscoverGET);
router.get('/search', peliculasSearchGET);
//Export de router
export default router;