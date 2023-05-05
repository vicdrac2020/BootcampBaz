import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePeliculasComponent } from './componentes/home-peliculas/home-peliculas.component';
import { BarraTituloComponent } from './componentes/barra-titulo/barra-titulo.component';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { BuscadorComponent } from './componentes/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePeliculasComponent,
    BarraTituloComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
