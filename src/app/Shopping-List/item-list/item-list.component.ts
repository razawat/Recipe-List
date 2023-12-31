import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { newListValue } from '../item/item.component';

// interface tableModel {
//   position:number,
//   name:string,
//   amount:number
// }

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    OnChanges,
    AfterViewChecked
{
  @Input() newData: any;
  dataSource = new MatTableDataSource<newListValue>([]);
  displayedColumns = ['position', 'name', 'amount'];
  constructor() {}

  ngOnInit(): void {
    console.log('On In It Item list: ', this.newData);
  }
  ngAfterViewInit(): void {
    // console.log('After view init: ', this.newData);
  }
  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked ', this.newData);
  }
  ngAfterContentInit(): void {
    // console.log('After content init ', this.newData);
  }
  ngAfterContentChecked(): void {
    // console.log('After content checked ', this.newData);
  }
  ngDoCheck(): void {
    //console.log('After do checked ', this.newData);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('Change ', changes);
    if (!changes['newData'].firstChange) {
      this.setTableData(changes['newData'].currentValue);
    }
    //if(changes.)
  }
  setTableData(newRowValue: newListValue) {
    this.dataSource = new MatTableDataSource<newListValue>([
      ...this.dataSource.data,
      newRowValue,
    ]);
  }
}
