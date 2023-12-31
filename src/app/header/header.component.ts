import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router) {}
  selected = {
    receipe:false,
    shopping:false,
  }
  onClickReceipe() {
    this.selected.receipe = true;
    this.selected.shopping = false;
  }
  onClickShoppingList() {
    this.selected.receipe = false;
    this.selected.shopping = true;
    this.router.navigate(['/shopping-list'])
  }
}
