import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent implements OnInit{

//Creacion del Input que recibe del compoente padre el array de productos
@Input() product = {
  name: '',
  price: 0,
  description: '',
  inventory: 0,
  image: '',
  cantidad: 0
};

//Agregacion output 
@Output() addToCart = new EventEmitter();
//Agregacion variable cantidad.
cantidad: number = 0;
//Agregacion variable
soldOut: boolean = false;


//fin objeto de producto.
  constructor() { }

  ngOnInit() {
  }

  //Agregacion funcion addProduct()
  addProduct() {
    if(this.cantidad < this.product.inventory){
      this.soldOut = false;
      this.cantidad++;
    } else {
      this.soldOut = true;
    }
  }

  //Agregacion funcion removeProduct()
  removeProduct() {
    if(this.cantidad > 0){
      this.soldOut = false;
      this.cantidad--;
    }
  }

  //Creacion metodo
  addToCartHandler() {
    if (this.cantidad > 0) {
      this.product['cantidad'] = this.cantidad;
      this.addToCart.emit(this.product)
    }
    return null
  }

}