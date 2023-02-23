import { Component } from '@angular/core';
import { BdArticulosService } from 'src/app/bd-articulos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  private Articulos:Array<any> = []
  private categoriaActivada = false
  private fabricanteActivado = false
  private articuloPorNombre:Array<any> =[]
  constructor(private bd:BdArticulosService) {
    this.recogerArticulos()
   }
  getPorCategoria(id:any){
    if(id == 0){
      this.categoriaActivada == false
    }else{
      this.categoriaActivada == true
    }
    if(!this.fabricanteActivado){
    this.Articulos =  []
    this.recogerArticulos()
  }
    id = id.target.value
    this.Articulos = this.Articulos.filter((articulo:any) => articulo.cat == id)
    this.getArticulos

  }
  getPorFabricante(id:any){
    if(id == 0){
      this.fabricanteActivado == false
    }else{
      this.fabricanteActivado == true
    }
    if(!this.fabricanteActivado){
    this.Articulos =  []
    this.recogerArticulos()
  }
    id = id.target.value
    this.Articulos = this.Articulos.filter((articulo:any) => articulo.fab == id)
    this.getArticulos
  }
  recogerArticulos(){
    this.Articulos = this.bd.getArticulos()
  }
  obtenerarticulos(){
    if(this.Articulos.length == 0){
      this.Articulos = this.bd.getArticulos()
    }
    return this.Articulos
  }
  getArticulos(){
    this.Articulos = this.bd.getArticulos()
    return this.Articulos
  }
  getCategorias(){
    return this.bd.getCategorias()
  }
  getFabricantes(){
    return this.bd.getFabricantes()
  }
  mostrararticulopornombre(){
    return this.articuloPorNombre
  }
  getPorNombre(nombre:any){
    nombre = nombre.target.value
    this.articuloPorNombre =  []
    this.getArticulos()
    for (let articulo of this.Articulos){
      if(articulo.nombre.toLowerCase().includes(nombre.toLowerCase()))
      this.articuloPorNombre.push(articulo)
    }
    console.log(this.articuloPorNombre)
    this.Articulos = this.articuloPorNombre
    return this.Articulos
  }
}
