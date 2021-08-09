import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-template',
  templateUrl: './using-template.component.html',
  styleUrls: ['./using-template.component.scss']
})
export class UsingTemplateComponent implements OnInit {
  myContext = {$implicit: 'eeee', localSk: 'Svet'};
  constructor() { }

  ngOnInit(): void {
  }

}
