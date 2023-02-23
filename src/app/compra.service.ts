import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private articuloscarrito:Array<any> = []
  private price = 0
  constructor() { }

  getArticulosCarrito(){
    return this.articuloscarrito
  }
  getPrice(){
    return this.price
  }
  addArticuloToCarrito(articulo:any){
    if(this.isAlreadyInCart(articulo)){
      this.articuloscarrito.find(a=>a.id==articulo.id).unidades++
    }else{
     let artcart = articulo
      artcart.unidades = 1
      this.articuloscarrito.push(artcart)
    }
    this.recalculatePrice()
  }
  isAlreadyInCart(articulo:any){
    let carritofiltrado = this.articuloscarrito.filter(a => a.id == articulo.id)
    return (carritofiltrado.length > 0)
  }
  decrementUnits(id:number){
    let art = this.articuloscarrito.find(a=>a.id==id)
    if(art.unidades) art.unidades--
    this.recalculatePrice()
  }
  incrementUnits(id:number){
    this.articuloscarrito.find(a=>a.id==id).unidades++
    this.recalculatePrice()
  }
  recalculatePrice(){
    let sum = 0
    this.articuloscarrito.forEach(art => {
      sum += art.unidades * art.precio
    })
    this.price = sum
  }
  removeFromCart(id:number){
    this.articuloscarrito = this.articuloscarrito.filter(a=>a.id!=id)
    this.recalculatePrice()
  }
}
