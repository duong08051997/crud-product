import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  formEditProduct: FormGroup;
  constructor( private fb: FormBuilder,
               private productService: ProductService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {
   const product = this.productService. getProductById(this.id);
   this.formEditProduct = this.fb.group({
      id: [product.id],
      name: [product.name],
      type: [product.type],
      price: [product.price],
      quantity: [product.quantity],
      description: [product.description]
    });
  }
edit(): void{
    this.productService.edit(this.formEditProduct.value, this.id);
    this.router.navigate(['/products']);
}
}
