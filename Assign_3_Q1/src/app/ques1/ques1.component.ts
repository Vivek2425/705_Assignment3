import { Component } from '@angular/core';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component {
  intvalue : number = 150;
  stringData: string = "Hello, Angular!";
  dateData: Date = new Date('10-2-2023');
}
