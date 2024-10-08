import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  ratings: number;
  brand: string;
  wishlist: boolean;
  imagePath1: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule] // Import HttpClientModule here
})
export class WishlistComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWishlistProducts();
  }

  getWishlistProducts() {
    this.http.get<Product[]>('http://localhost:7981/api/cosweb/products')
      .subscribe(data => {
        this.products = data.filter(product => product.wishlist);
      });
  }

  addToCart(product: Product) {
    console.log('Added to cart:', product);
  }
}
