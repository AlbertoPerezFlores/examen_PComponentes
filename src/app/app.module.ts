import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { BuscadorComponent } from './secciones/buscador/buscador.component';
import { ArticuloComponent } from './secciones/articulo/articulo.component';
import { CarritoComponent } from './secciones/carrito/carrito.component';
import { ArticuloCarritoComponent } from './secciones/articulo-carrito/articulo-carrito.component';
import { Error404Component } from './secciones/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavbarComponent,
    PieComponent,
    InicioComponent,
    BuscadorComponent,
    ArticuloComponent,
    CarritoComponent,
    ArticuloCarritoComponent,
    Error404Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
