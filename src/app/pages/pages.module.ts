import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';
import { TwoDecimalsPipe } from './two-decimals.pipe';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

ListComponent

const routes = [
  { path: 'menu', component: ListComponent },
  { path: 'menu/cart', component: CartComponent },
  { path: 'dish/:id', component: DetailComponent },
];

@NgModule({
  // declarations: [
  //   ListComponent,
  //   DetailComponent
  // ],
  // imports: [
  //   CommonModule
  // ]
  declarations: [TwoDecimalsPipe, ListComponent, DetailComponent, CartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
  // providers: [MenuService],
})
export class PagesModule { }
