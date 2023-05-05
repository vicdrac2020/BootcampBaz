//Imports express
import { Router } from 'express';
//Imports controllers of health
import { peliculasDiscoverGET, peliculasSearchGET, peliculasGenerosGET } from '../controller/peliculasController.js';
//Ruteo
const router = Router();
//Direcciones
router.get('/', peliculasDiscoverGET);
router.get('/search', peliculasSearchGET);
router.get('/generos', peliculasGenerosGET);
//Export de router
export default router;