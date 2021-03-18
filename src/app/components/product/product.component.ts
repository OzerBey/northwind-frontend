import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {
    productId: 1,
    productName: 'Glass',
    categoryId: 1,
    unitPrice: 15,
  };
  product2 = {
    productId: 2,
    productName: 'Notebook',
    categoryId: 2,
    unitPrice: 1500,
  };
  product3 = {
    productId: 3,
    productName: 'Pen',
    categoryId: 2,
    unitPrice: 15,
  };
  product4 = {
    productId: 4,
    productName: 'Book',
    categoryId: 2,
    unitPrice: 150,
  };
  product5 = {
    productId: 5,
    productName: 'Plate',
    categoryId: 1,
    unitPrice: 35,
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
