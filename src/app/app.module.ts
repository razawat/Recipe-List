import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Material } from './material.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './Shopping-List/item/item.component';
import { ItemListComponent } from './Shopping-List/item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddModifyComponent } from './Receipe/add-modify/add-modify.component';
import { ReceipeDescriptionComponent } from './Receipe/receipe-description/receipe-description.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    HeaderComponent,
    AddModifyComponent,
    ReceipeDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
