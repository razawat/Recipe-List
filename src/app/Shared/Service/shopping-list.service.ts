import { Injectable } from '@angular/core';
import { ShoppingList } from '../Model/commonModel';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingListData: ShoppingList[] = [{name:'Apple',amount:5},{name:'banana',amount:10}];
  constructor() {}

  setShoppingList(newData: ShoppingList) {
    this.shoppingListData.unshift(newData);
  }
  getShoppingList() {
    return this.shoppingListData.slice();
  }
}
