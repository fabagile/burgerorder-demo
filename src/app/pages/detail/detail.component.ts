import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { MENUS } from 'src/app/meals-mock';
import { Menu } from 'src/app/mealTypes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  // styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  menus= MENUS
  dish: Menu |undefined
  // dish = MENUS[0]
  constructor(private router:Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    const dishId: string | null = this.route.snapshot.paramMap.get("id");
    // const dishId: string | null = this.route.snapshot.paramMap.get("id");
    if(dishId) {
      this.dish = this.menus[+dishId-1]
      console.log(dishId, this.dish)

    }
    
  }
  goToMenu() {
    this.router.navigate(['/menu'])
  }}
