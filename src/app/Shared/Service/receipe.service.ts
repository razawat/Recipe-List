import { Injectable } from '@angular/core';
import { Receipe } from '../Model/commonModel';

@Injectable({
  providedIn: 'root',
})
export class ReceipeService {
  private receipeData: Receipe[] = [
    {
      name: 'Test 2',
      description: 'First test',
      img: 'assets/SEO-Food-Fresh-Groceries.png',
    },
    {
      name: 'Test',
      description: 'First test',
      img: 'assets/w0714a16207251033667-thumb.jpg',
    },
   
  ];
  constructor() {}

  setReceipeData(newData: Receipe) {
    this.receipeData.unshift(newData);
  }
  getReceipeData() {
    return this.receipeData.slice();
  }
}
