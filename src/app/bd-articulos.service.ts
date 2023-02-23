import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdArticulosService {
  private url = 'https://my-json-server.typicode.com/AlbertoPerezFlores/db-ev';
  private articulos:Array<any> = []
  private categorias:Array<any> = []
  private fabricantes:Array<any> = []
  constructor(
    private http: HttpClient
  ) {
    this.http.get (this.url + '/articulos').subscribe((data:any) => {
      this.articulos = data
    })
    this.http.get (this.url + '/categorias').subscribe((data:any) => {
      this.categorias = data
    })
    this.http.get (this.url + '/fabricantes').subscribe((data:any) => {
      this.fabricantes = data
    })

   }

   getArticulos(){
      return this.articulos
   }

    getCategorias(){
      return this.categorias
    }

    getFabricantes(){
      return this.fabricantes
    }
}
