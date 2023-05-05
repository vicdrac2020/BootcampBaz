import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HomePeliculasComponent } from './componentes/home-peliculas/home-peliculas.component';
const routes: Routes = [
  {
    path:'',
    component: HomePeliculasComponent
  },
  {
    path:'buscador',
    component: BuscadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
