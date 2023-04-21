//Imports express
import { Router } from 'express';
//Imports controllers of health
import { peliculasDiscoverGET } from '../controller/peliculasController.js';
//Ruteo
const router = Router();
//Direcciones
router.get('/', peliculasDiscoverGET);
//Export de router
export default router;