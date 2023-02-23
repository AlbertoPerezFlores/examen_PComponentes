import { Component } from '@angular/core';
import { CompraService } from 'src/app/compra.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor(private carrito:CompraService) { }

  getArticulosCarrito(){
    return this.carrito.getArticulosCarrito()
  }
  getPrecioTotal(){
    return this.carrito.getPrice()
  }
}
