import { Component } from '@angular/core';
import { CATEGORIES, MENUS } from './meals-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-burger-evenfurther';
  menus = MENUS;
  // list:Menu[]
  categories = CATEGORIES
  items = undefined;
}
