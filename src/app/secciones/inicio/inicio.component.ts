import { Component } from '@angular/core';
import { BdArticulosService } from 'src/app/bd-articulos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private bd:BdArticulosService) { }
  private destacados:Array<any> = []
  getArticulos():Array<any>{
    this.destacados = this.bd.getArticulos()
    this.destacados = this.destacados.filter((articulo:any) => articulo.stock)
    this.destacados = this.destacados.slice(0,3)
    return this.destacados
  }
}
