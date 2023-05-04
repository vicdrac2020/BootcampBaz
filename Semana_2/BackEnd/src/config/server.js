// Express
import express from 'express';
import cors from 'cors';
// Router
import router from '../routes/router.js';
// Servicios de respuestas
import { responseModule } from '../middleware/response.js';
import { errorHandler } from '../middleware/errorHandler.js';
// Server
const server = express();
// Middlewares
server.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['X-Requested-With', 'content-type', 'Accept', 'Authorization'],
}));
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
    strict: false,
  })
);
// Route
server.use('/galeria/peliculas', router);
// Handlers
server.use(responseModule);
server.use(errorHandler);
// Export
export default server;
