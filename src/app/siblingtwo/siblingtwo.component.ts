import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-siblingtwo',
  templateUrl: './siblingtwo.component.html',
  styleUrls: ['./siblingtwo.component.css'],
})
export class SiblingtwoComponent implements OnInit {
  inputdata = '';
  constructor(private msgService: MessageService) {}

  ngOnInit(): void {
    this.msgService.s.subscribe((data) => {
      this.inputdata = data;
    });
  }
}
