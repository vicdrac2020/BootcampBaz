import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../servicios/peliculas-service.service';
import { ListaPeliculas } from '../../modelos/lista-peliculas';
import { ListaGeneros } from '../../modelos/lista-generos';
import { FormBuilder, Validators } from '@angular/forms';
import { ListaOrdenamiento } from 'src/app/modelos/lista-ordenamiento';
@Component({
  selector: 'app-home-peliculas',
  templateUrl: './home-peliculas.component.html',
  styleUrls: ['./home-peliculas.component.css'],
})

export class HomePeliculasComponent implements OnInit {
  public listaPeliculas: ListaPeliculas = {page:1,results:[],total_pages:1,total_results:1};
  
  public years: string[] = ['Cualquier año'];
  public defaultYear: string = 'Cualquier año';
  public defaultGenero: string = '0';
  public defaultOrdenamiento: string = 'popularity.desc';
  public ordenamientoPelicula: Array<ListaOrdenamiento> = [
    {idSort:'popularity.desc',nameSort:'Mas Popular'},
    {idSort:'popularity.asc',nameSort:'Menos popular'}
  ];

  searchForm = this.formBuilder.group({
    generoPelicula: ['',[Validators.required]],
    yearPelicula: ['',[Validators.required]],
    ordenamientoPelicula: ['',[Validators.required]]
  })

  public listaGeneros: ListaGeneros = {genres:[{id:0,name:'Cualquier genero'}]};
  constructor(private peliculasServiceService: PeliculasServiceService, private formBuilder: FormBuilder) {
    this.searchForm.controls['yearPelicula'].setValue(this.defaultYear, {onlySelf: true});
    this.searchForm.controls['generoPelicula'].setValue(this.defaultGenero, {onlySelf: true});
    this.searchForm.controls['ordenamientoPelicula'].setValue(this.defaultOrdenamiento, {onlySelf: true});
  }

  ngOnInit() {
    for (let i = 2023; i > 1990; i--) {
      this.years.push(i.toString());
    }
    this.peliculasServiceService.getGenerosPeliculas().subscribe(generos => (this.listaGeneros.genres = this.listaGeneros.genres.concat(generos.genres)));
    this.peliculasServiceService.getListaPeliculas({}).subscribe(peliculas => (this.listaPeliculas = peliculas));
  }
  onSubmit(){
    let cred = this.searchForm.value;
    if(cred.yearPelicula as string === this.defaultYear){
      cred.yearPelicula = '';
    }
    if (cred.generoPelicula as string === this.defaultGenero) {
      cred.generoPelicula = '';
    }
    console.log(cred.yearPelicula as string);
    this.peliculasServiceService.getListaPeliculas(cred).subscribe(response => this.listaPeliculas = response)
  }
}
