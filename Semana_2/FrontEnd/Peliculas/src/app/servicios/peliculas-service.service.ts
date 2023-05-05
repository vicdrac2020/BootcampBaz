import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaPeliculas } from '../modelos/lista-peliculas';
import { Observable } from "rxjs";
import { ListaGeneros } from '../modelos/lista-generos';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {
  
  private DiscoverUrl = "http://localhost:3000/galeria/peliculas"; // URL to web api
  private searchUrl = "http://localhost:3000/galeria/peliculas/search"; // URL to web api
  private generosUrl = "http://localhost:3000/galeria/peliculas/generos"; // URL to web api
  constructor(private http: HttpClient) {}

  public getListaPeliculas(params:{}): Observable<ListaPeliculas> {
    return this.http.get<ListaPeliculas>(this.DiscoverUrl,{params});
  }

  public getSearchPeliculas(params:{}): Observable<ListaPeliculas> {
    return this.http.get<ListaPeliculas>(this.searchUrl,{params});
  }

  public getGenerosPeliculas(): Observable<ListaGeneros> {
    return this.http.get<ListaGeneros>(this.generosUrl);
  }
}
