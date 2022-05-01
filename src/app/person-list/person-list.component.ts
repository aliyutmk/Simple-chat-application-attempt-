import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent{
  clckBtnSubscription: Subscription;

   //_users: Array<number> = [1,2,3,4,5,6,7,8,9];


  constructor(private _sharedService: SharedService) { 

    this.clckBtnSubscription = this._sharedService.getClickEvent().subscribe(() =>{
      this.incrPerson();
    })
  }


 count: number = 1 ;
  incrPerson(){
    this.count++;
   // let x = this.count;
  }
  removePersons(){
    return this.count = 0;
  }
}