import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaPeliculas } from '../modelos/lista-peliculas';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {
  private listaPeliculas: ListaPeliculas = {page:1,results:[],total_pages:1,total_results:1};
  private ChuckUrl = "http://localhost:3000/galeria/peliculas"; // URL to web api
  private searchUrl = "http://localhost:3000/galeria/peliculas/search"; // URL to web api
  constructor(private http: HttpClient) {}

  public getListaPeliculas(): Observable<ListaPeliculas> {
    return this.http.get<ListaPeliculas>(this.ChuckUrl);
  }

  public getSearchPeliculas(nombrePelicula:String): Observable<ListaPeliculas> {
    return this.http.get<ListaPeliculas>(this.searchUrl,{params:{'query':`${nombrePelicula}`}});
  }
}
