import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';
import { TwoDecimalsPipe } from './two-decimals.pipe';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

ListComponent

const routes = [
  { path: 'menu', component: ListComponent },
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
  declarations: [TwoDecimalsPipe, ListComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  // providers: [MenuService],
})
export class PagesModule { }
