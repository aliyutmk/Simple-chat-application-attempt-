import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
  //public users = [];
  addPerson(){
  
    this._sharedService.sendClickEvent();
    

   // this.click = this.click + 1;
    //console.log('Person', this.click);
  }

  removePersons(){
    let x = this._sharedService.getClickEvent ();
    return x = null;
  //  this.click = 0;
    //return this.click;

  }
}
  /*
  ...................
I tried using service to pass the 
messages from parent to child but am 
errors and nothing is showing 
(private _sharedService: SharedService)
inshide the constructor 
  .................
  user:any;
  addPerson(){
    this._sharedService.sendClickEvent(this.user)

  }
  getPersons(){
    this._sharedService. getClickEvent();

  }

}
*/