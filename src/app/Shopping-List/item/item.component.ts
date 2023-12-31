import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';

export interface newListValue {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, AfterViewInit {
  inputPlaceHolder = {
    nameTb: 'Enter the name',
    amountTb: 'Enter the amount',
  };
  errorDescription = 'Required Field';
  nameInputMaxLength = 50;
  amountInputMaxLength = 10;
  newList!: newListValue;

  ngOnInit(): void {
    console.log('On in it item comp:');
  }

  ngAfterViewInit(): void {
    console.log('On after content in it item comp:');
  }
  // --------------- Start - Click Event ---------------- //

  onClickAddButton(formValue: NgForm) {
    console.log(formValue);
    if (formValue.valid) {
      // this.newList.name = formValue.controls['itemName'].value;
      // this.newList.amount = formValue.controls['itemAmount'].value;
      this.newList = {
        name: formValue.controls['itemName'].value,
        amount: formValue.controls['itemAmount'].value,
      };
      // formValue.resetForm();
      // formValue.reset();
      //this.onClearButtonClick(formValue);
    }
  }

  onClearButtonClick(formValue: NgForm) {
    console.log(formValue);
    formValue.resetForm();
  }

  // --------------- End - Click Event ---------------- //
}
