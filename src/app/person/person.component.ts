import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }
  send(utxt: string,txt: string) {
    document.getElementById(utxt).innerHTML=txt;
  }

  ngOnInit() {
    this._sharedService.getClickEvent();
  }

}