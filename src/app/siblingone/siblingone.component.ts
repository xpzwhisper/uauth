import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-siblingone',
  templateUrl: './siblingone.component.html',
  styleUrls: ['./siblingone.component.css'],
})
export class SiblingoneComponent implements OnInit {
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {}
  InputChange(event: any) {
    console.log(event.target.value);

    this.msgService.s.next(event.target.value);
  }

  complete() {
    this.msgService.s.complete();
  }
}
