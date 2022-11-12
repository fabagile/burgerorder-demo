import { Component } from '@angular/core';
import { CATEGORIES, MENUS } from './meals-mock';
import { FooterComponent } from './layout/footer/footer.component';
// import {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date()
  title = 'Burger Order';
  menus = MENUS;
  // list:Menu[]
  categories = CATEGORIES
  items = undefined;
}
