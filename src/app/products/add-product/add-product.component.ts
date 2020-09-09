import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formAddProduct: FormGroup;
  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddProduct = this.fb.group({
      id: [''],
      name: [''],
      type: [''],
      price: [''],
      quantity: [''],
      description: ['']
    });
  }
  add(): void{
    this.productService.add(this.formAddProduct.value);
    this.router.navigate(['/products']);
  }

}
