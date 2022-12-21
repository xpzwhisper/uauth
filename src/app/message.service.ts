import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  s: AsyncSubject<any> = new AsyncSubject();
  constructor() {}
  getMessage(s: String) {
    this.s.next(s);
  }
}
