import axios from "axios";
import {serverApiRest} from '../config/env.js';
export const getDiscoverPeliculas = async (queryParams) => {
    const response = await axios.get(`http://${serverApiRest.urlServicios}/discover/movie`, { params: validadorQueryParams(queryParams) })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error(error);
        })
    return response;
};
export const getSearchPeliculas = async (queryParams) => {
    const response = await axios.get(`http://${serverApiRest.urlServicios}/search/movie`, { params: validadorQueryParams(queryParams) })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error(error);
        })
    return response;
}
export const getGenerosPeliculas = async (queryParams) => {
    const response = await axios.get(`http://${serverApiRest.urlServicios}/genre/movie/list`, { params: validadorQueryParams(queryParams) })
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error(error);
        })
    return response;
}
const validadorQueryParams = queryParams => {
    const params = {
        api_key: serverApiRest.apy_key,
        language: 'es-mx'
    };
    if (queryParams?.pagina) {
      params.page = queryParams.pagina;
    }
    if (queryParams?.ordenamientoPelicula) {
        params.sort_by = queryParams.ordenamientoPelicula;   
    }
    if(queryParams?.searchPelicula){
        params.query = queryParams.searchPelicula;
    }
    if(queryParams?.yearPelicula){
        params.year = queryParams.yearPelicula;
    }
    if(queryParams?.generoPelicula){
        params.with_genres = queryParams.generoPelicula;
    }
    return params;
};