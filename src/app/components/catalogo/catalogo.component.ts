import { Component } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'
import { ApiService } from '../../services/api.service';
import { producto } from '../dto/producto-dto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  public products: producto[] = [];

  // Inyectar la dependencia del servicio en el constructor.
  constructor(
    private apiService: ApiService, 
    private cartServicesService: CartServicesService 
  ) { }

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe((res:any) => {
        this.products = res;
      });
  }
  
  // Actualizar el método para añadir un producto al carrito mediante el servicio
  addToCart(product: any) { 
    this.cartServicesService.addToCart(product)
    console.log( this.cartServicesService.getCartProducts() )
  }

}
