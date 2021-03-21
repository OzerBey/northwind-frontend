import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }

  getProducts() {
    //getProducts() = Observable döner bu observable demek buraya subscribe olabilririz anlamına gelir
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true; //yüklendigi anda onu true hale getiriyoruz
    });
  }

  getProductsByCategory(categorId: number) {
    //getProducts() = Observable döner bu observable demek buraya subscribe olabilririz anlamına gelir
    this.productService
      .getProductsByCategory(categorId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true; //yüklendigi anda onu true hale getiriyoruz
      });
  }
}
