import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from './products/list-product/list-product.component';
import {AddProductComponent} from './products/add-product/add-product.component';
import {EditProductComponent} from './products/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
      path: '',
      component: ListProductComponent
    },
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: ':id/edit',
        component: EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
