import { status } from "../utils/HTTPCodes.js";
import { getDiscoverPeliculas, getSearchPeliculas, getGenerosPeliculas } from "../service/getDiscoverPeliculasService.js";
export const peliculasDiscoverGET = async (req, res, next) => {
    try {
        const result = await getDiscoverPeliculas(req.query);
        res.locals.response = result;
        res.locals.codigo = status.OK;
        next();
    } catch (error) {
        next(error);         
    }
};

export const peliculasSearchGET = async (req, res, next) => {
    try {
        const result = await getSearchPeliculas(req.query);
        res.locals.response = result;
        res.locals.codigo = status.OK;
        next();
    } catch (error) {
        next(error);         
    }
};

export const peliculasGenerosGET = async (req, res, next) => {
    try {
        const result = await getGenerosPeliculas(req.query);
        res.locals.response = result;
        res.locals.codigo = status.OK;
        next();
    } catch (error) {
        next(error);         
    }
};