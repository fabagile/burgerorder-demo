import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUS, CATEGORIES } from 'src/app/meals-mock';

import {Menu }from "src/app/mealTypes"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  menus = MENUS
  // menus = MENUS;
  // list:Menu[]
  categories = CATEGORIES
  items:Menu[] = []

  cart:Menu[] = []
  // category = {}
  // this.categories[1].isActive = true
  
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    this.items = this.menus.filter(item=> this.categories[item.id])
    // this.category = this.categories.filter(cat => )
  }
  goToDish(id:number) {
    console.log(id)
    this.router.navigate(['/dish/', id])
    
  }

  showList(id: number):Menu[] {
    this.items = this.menus.filter((item) => id == item.category);
    this.categories.map(item => {
      if (item.id != id) item.isActive = false
      else item.isActive = true
    })
    console.log(this.items)
    // this.active = "active"
    return this.items
  }
  addToCart(item:Menu) {
    
    // console.log()
    this.cart = [...this.cart, item]
    console.log("panier: ")
    console.table(this.cart)
  }
  goToCart() {
    this.router.navigate(["/menu/cart"])
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
