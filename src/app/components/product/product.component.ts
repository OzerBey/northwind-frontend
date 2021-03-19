import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //bununla birlikte backende istekte bulunabiliyoruz
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'http://localhost:50630/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('Init çalıştı');
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl) //apiUrl 'den gelen datayı ProductResponseModel e map edecegini belirtiyoruz
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
