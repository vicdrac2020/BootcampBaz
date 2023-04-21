import { status } from "../utils/HTTPCodes.js";
export const errorHandler = async (error, req, res, next) => {
    console.error('ERR::[errorHandler/found]: ', error);
    // Estructura la respuesta
    const responseJson = {detalles:[]}
    // Se añaden los detalles de error
    if (error?.message) {
        responseJson.detalles.push(error.message);
    }
    // Respuesta
    res.status(status.BAD_REQUEST).json(responseJson);
    // Next 
    next();
};