import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ItemComponent } from './Shopping-List/item/item.component';
import { RouterModule } from '@angular/router';
import { AddModifyComponent } from './Receipe/add-modify/add-modify.component';

const routes: Routes = [
  { path: 'shopping-list', component: ItemComponent },
  { path:'Receipe-list',component:AddModifyComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
