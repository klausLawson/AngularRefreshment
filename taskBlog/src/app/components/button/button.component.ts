import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  model:any = {
    left: true,
    middle: false,
    right: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
