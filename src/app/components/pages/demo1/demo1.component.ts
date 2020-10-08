import { Component, OnInit } from '@angular/core';

import {IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  fromBrian_dropdownSettings = {};
  fromBrian_dropdownData = [];
  fromBrian_selectedItems = [];

  constructor() { }

  ngOnInit(): void {
    this.newThingToSearchFor("");
    this.fromBrian_selectedItems =  [
      { item_id: 1, item_text: 'Brian' },
        { item_id: 2, item_text: 'Nathaniel' },
    ];



    this.fromBrian_dropdownSettings = <IDropdownSettings>{
       singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
       enableCheckAll: true,
       selectAllText: 'Select All Items',
       unSelectAllText: 'Unselect All Items',
       allowSearchFilter: true,
       allowRemoteDataSearch: true     
     }; 

  }// end of ngOnInit


  public onFilterChange(searchText: string) {
    console.log(`Searching for: ${searchText}`);
    this.newThingToSearchFor(searchText);
  }

  public onDropDownChange(args: any){
    console.log("Change Called");
    console.log(args);
  }

  next(min, max){​​
    return Math.random() * (max - min) + min;
  }​​

  filterTextKeyedTimer;



  newThingToSearchFor(text:string){​​
    console.log(`Filtering on: ${​​text}​​`);
    if(this.filterTextKeyedTimer){​​
      clearTimeout(this.filterTextKeyedTimer);
    }​​

    this.filterTextKeyedTimer = setTimeout(() => {
      console.log("Calling Server");​​
      let newItems = [];
      for(let i =0; i < this.next(10,20); ++i){​​
        let itemNumber = text + "_ItemNumber" + this.next(1000,2000)
        newItems.push({​​
          item_id: i, item_text: itemNumber
        }​​);
      }
      this.fromBrian_dropdownData = newItems; // have to assign it like this to trigger the @Input() set;
      
      console.log(`Dropdown count is now: ${this.fromBrian_dropdownData.length}`);​​
      this.filterTextKeyedTimer = null;
    }​​, 600);
  }

}
