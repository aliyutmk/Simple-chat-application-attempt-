import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SharedService {
  private subject = new Subject<any>();
  subject$ = this.subject.asObservable();


  sendClickEvent(){
    this.subject.next(null);
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}