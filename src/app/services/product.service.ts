import { HttpClient } from '@angular/common/http'; //bununla birlikte backende istekte bulunabiliyoruz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  //injecte edilebilecek servis demektir
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:50630/api/';
  constructor(private httpClient: HttpClient) {}

  //servisten api istegi yapılış şekli
  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath); //apiUrl 'den gelen datayı ProductResponseModel e map edecegini belirtiyoruz
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath); //apiUrl 'den gelen datayı ProductResponseModel e map edecegini belirtiyoruz
  }
}
