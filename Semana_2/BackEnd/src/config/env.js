import * as dotEnv from "dotenv";
dotEnv.config();

export const db = {};

export const serverApiRest = {
    urlServicios: process.env.urlServicios,
    urlImagenes: process.env.urlImagenes,
    apy_key: process.env.apiKey
};