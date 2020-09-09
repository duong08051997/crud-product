import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products = [];

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
  delete(id: number): void{
    this.productService.delete(id);
  }

}
