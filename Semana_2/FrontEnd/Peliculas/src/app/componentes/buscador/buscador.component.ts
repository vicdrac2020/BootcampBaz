import { Component } from '@angular/core';
import { ListaPeliculas } from 'src/app/modelos/lista-peliculas';
import { PeliculasServiceService } from 'src/app/servicios/peliculas-service.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  public listaPeliculas: ListaPeliculas = {page:1,results:[],total_pages:1,total_results:1};
  searchForm = this.formBuilder.group({
    searchPelicula: ['',[Validators.required]]
  })
  constructor(private peliculasServiceService: PeliculasServiceService, private formBuilder: FormBuilder) {
    
  }

  onSubmit(){
    let cred = this.searchForm.value;
    this.peliculasServiceService.getSearchPeliculas(cred.searchPelicula as String).subscribe(response => this.listaPeliculas = response)
  }
}
