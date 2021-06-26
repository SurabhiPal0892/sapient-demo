import { Component, OnInit } from '@angular/core';
import { products_sample_data } from '../dummy-data/data';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  products = [];
  layout = 'Grid';
  productsDisplay: any[];
  constructor() { }
  ngOnInit() {
    this.products = products_sample_data;
    this.productsDisplay = this.products;
  }
  switchToGridLayout() {
    this.layout = 'Grid';
  }
  switchToListLayout() {
    this.layout = 'List';
  }

  getSelectedPrice(event) {
    let price = event.target.value;
    if (price < 0) {
      return;
    } else {
      let range = price.split('-');
      let p = this.products.filter(p => {
        if (p.price >= range[0] && p.price <= range[1]) {
          return true;
        }
      });
      this.productsDisplay = p;
    }
  }
}
