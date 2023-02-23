import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './secciones/buscador/buscador.component';
import { CarritoComponent } from './secciones/carrito/carrito.component';
import { Error404Component } from './secciones/error404/error404.component';
import { InicioComponent } from './secciones/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'buscador', component: BuscadorComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
