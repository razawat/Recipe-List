import { Component, Input, OnInit } from '@angular/core';
import { Receipe } from 'src/app/Shared/Model/commonModel';
import { ReceipeService } from 'src/app/Shared/Service/receipe.service';

@Component({
  selector: 'app-receipe-description',
  templateUrl: './receipe-description.component.html',
  styleUrls: ['./receipe-description.component.css'],
})
export class ReceipeDescriptionComponent implements OnInit {
  receipeListData: Receipe[] = new Array<Receipe>();
  descriptionData!: Receipe;
  constructor(private receipeService: ReceipeService) {}
  ngOnInit(): void {
    this.receipeListData = this.receipeService.getReceipeData();
  }

  hideShow = {
    showDescription: false,
  };
  onClickReceipeList(index: number) {
    this.hideShow.showDescription = true;
    this.descriptionData = {
      name: this.receipeListData[index].name,
      description: this.receipeListData[index].description,
      img: this.receipeListData[index].img,
    };
  }
}
