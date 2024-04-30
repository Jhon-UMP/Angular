import { Injectable } from '@angular/core';

// Definimos la interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  // Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }

  // Método para añadir un producto al carrito
  addToCart(product: Product): void {
    this.cart.push(product);
  }

  // Método para eliminar un producto del carrito por su 'id'
  removeProductById(id: number): void {
    this.cart = this.cart.filter(product => product.id !== id);
  }

  // Método para obtener todos los productos del carrito
  getCartProducts(): Product[] {
    return this.cart;
  }

  // Método para calcular el precio total de los productos en el carrito
  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  // Método para vaciar todos los productos del carrito
  clearCart(): void {
    this.cart = [];
  }
}
