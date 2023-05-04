import { status } from "../utils/HTTPCodes.js";
import { getDiscoverPeliculas, getSearchPeliculas } from "../service/getDiscoverPeliculasService.js";
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