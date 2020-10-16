import { Component, OnInit } from '@angular/core';

import {IDropdownSettings } from 'ng-multiselect-dropdown';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  fromBrian_dropdownSettings = {};
  fromBrian_dropdownData = [];
  fromBrian_selectedItems = [];

  constructor(private util: UtilityService) { }

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


  newThingToSearchFor(text:string){​​
    console.log(`Filtering on: ${​​text}​​`);


    this.util.debounce('autocomplete1', 600, () => {
      // generate data randomly untill we find an easy web service example clal to do
      console.log("Calling Server");​​
      this.fromBrian_dropdownData = this.util.range(0, this.util.next(10,50))
                                        .map((i)=>{
                                          let itemNumber = text + "_ItemNumber" + this.util.next(0,100000);
                                          return {​​
                                            item_id: i, item_text: itemNumber
                                          }​​;
                                        });
    });

    console.log(`Dropdown count is now: ${this.fromBrian_dropdownData.length}`);​​
  }

}
