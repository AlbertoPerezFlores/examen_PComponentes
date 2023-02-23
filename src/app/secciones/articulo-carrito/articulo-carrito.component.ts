import { Component, Input } from '@angular/core';
import { CompraService } from 'src/app/compra.service';


@Component({
  selector: 'app-articulo-carrito',
  templateUrl: './articulo-carrito.component.html',
  styleUrls: ['./articulo-carrito.component.css']
})
export class ArticuloCarritoComponent {
  @Input() articulo:any
  precioArticulo:number = 0
  cantidadArticulo:number = 1
  constructor(private carrito:CompraService) {

  }
  incrementUnits(id:number){
    this.carrito.incrementUnits(id)
  }
  decrementUnits(id:number){
    this.carrito.decrementUnits(id)
  }
  removeFromCart(id:number){
    this.carrito.removeFromCart(id)
  }
  precioTotalArticulo(id:number){
    let art = this.carrito.getArticulosCarrito().find(a=>a.id==id)
    return art.precio * art.unidades
  }
}
