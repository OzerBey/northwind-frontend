import { HttpClient } from '@angular/common/http'; //bununla birlikte backende istekte bulunabiliyoruz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  //injecte edilebilecek servis demektir
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://localhost:50630/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  //servisten api istegi yapılış şekli
  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl); //apiUrl 'den gelen datayı ProductResponseModel e map edecegini belirtiyoruz
  }
}
