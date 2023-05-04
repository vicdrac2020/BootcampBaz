import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../servicios/peliculas-service.service';
import { ListaPeliculas } from '../../modelos/lista-peliculas';
@Component({
  selector: 'app-home-peliculas',
  templateUrl: './home-peliculas.component.html',
  styleUrls: ['./home-peliculas.component.css'],
})

export class HomePeliculasComponent implements OnInit {
  public listaPeliculas: ListaPeliculas = {page:1,results:[],total_pages:1,total_results:1};
  constructor(private peliculasServiceService: PeliculasServiceService) {}

  ngOnInit() {
    this.peliculasServiceService.getListaPeliculas().subscribe(peliculas => (this.listaPeliculas = peliculas));
  }
}
