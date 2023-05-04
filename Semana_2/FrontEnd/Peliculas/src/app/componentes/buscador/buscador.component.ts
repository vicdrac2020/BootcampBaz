import { Component, OnInit } from '@angular/core';
import { ListaPeliculas } from 'src/app/modelos/lista-peliculas';
import { PeliculasServiceService } from 'src/app/servicios/peliculas-service.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{
  public listaPeliculas: ListaPeliculas = {page:1,results:[],total_pages:1,total_results:1};
  
  public years: string[] = ['Cualquier Año'];
  public default: string = 'Cualquier Año';
  searchForm = this.formBuilder.group({
    searchPelicula: ['',[Validators.required]],
    yearPelicula: ['',[Validators.required]]
  })
  constructor(private peliculasServiceService: PeliculasServiceService, private formBuilder: FormBuilder) {
    this.searchForm.controls['yearPelicula'].setValue(this.default, {onlySelf: true});
  }
  
  ngOnInit() {
    for (let i = 2023; i > 1990; i--) {
      this.years.push(i.toString());
    }
  }
  onSubmit(){
    let cred = this.searchForm.value;
    if(cred.yearPelicula as String === this.default){
      cred.yearPelicula = '';
    }
    console.log(cred.yearPelicula as String);
    this.peliculasServiceService.getSearchPeliculas(cred.searchPelicula as String,cred.yearPelicula as String).subscribe(response => this.listaPeliculas = response)
  }
}
