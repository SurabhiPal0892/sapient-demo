import { Component, OnInit } from '@angular/core';
import { products_sample_data } from '../dummy-data/data';
import { layoutType } from './enum/layout.enum';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  
  allProducts = [];
  layout = layoutType.grid;
  productsToDisplay = [];

  constructor() { }

  ngOnInit() {
    this.allProducts = [...products_sample_data];
    this.productsToDisplay = this.allProducts;
  }

  switchToGridLayout() {
    this.layout = layoutType.grid;
  }

  switchToListLayout() {
    this.layout = layoutType.list;
  }

  getProductsOfSelectedPrice(event) {
    let price = event.target.value;
    if (price < 0) {
      this.productsToDisplay = [...products_sample_data];
    } else {
      let range = price.split('-');
      let filteredProducts = this.allProducts.filter(product => {
        if (product.price >= range[0] && product.price <= range[1]) {
          return true;
        }
      });
      this.productsToDisplay = filteredProducts;
    }
  }

}
