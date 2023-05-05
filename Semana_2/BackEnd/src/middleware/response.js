import { status } from "../utils/HTTPCodes.js";
export const responseModule = async (req, res, next) => {
    const { response, codigo } = res.locals;
    try {
      res.status(codigo || status.OK).json(response);
    } catch (error) {
      // Manejo de errores
      console.error('ERR::[responseModule/catch]:', error);
      next(error);
    }
  };