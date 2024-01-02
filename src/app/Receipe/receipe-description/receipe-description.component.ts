import { Component } from '@angular/core';

@Component({
  selector: 'app-receipe-description',
  templateUrl: './receipe-description.component.html',
  styleUrls: ['./receipe-description.component.css']
})
export class ReceipeDescriptionComponent {
  hideShow = {
    showDescription:false,
  }
  onClickReceipeList() {  
    this.hideShow.showDescription = true;
  }
}
