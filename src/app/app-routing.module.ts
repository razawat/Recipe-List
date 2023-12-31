import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ItemComponent } from './Shopping-List/item/item.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'shopping-list', component: ItemComponent },
  // { path: 'about', component: AboutComponent },
  // Add more routes as needed
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
