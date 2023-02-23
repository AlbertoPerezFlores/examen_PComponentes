import { Component, Input } from '@angular/core';
import { CompraService } from 'src/app/compra.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
  @Input() articulo:any
    constructor(private carrito:CompraService) { }

    addToCarrito(articulo:any){
      this.carrito.addArticuloToCarrito(articulo)
    }

}
