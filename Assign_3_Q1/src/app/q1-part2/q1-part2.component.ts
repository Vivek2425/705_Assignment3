import { Component } from '@angular/core';

@Component({
  selector: 'app-q1-part2',
  templateUrl: './q1-part2.component.html',
  styleUrls: ['./q1-part2.component.css']
})
export class Q1Part2Component {
  selectedValue: string = "";
  NumArray : number[]=[10,20,30,40];
  stringArray : string[]=["Name : vivek","Age : 22"];
  studArray = [{"Name":"vivek","rollno":25},{"Name":"dhruvi","rollno":68},{"Name":"pooja","rollno":54}]
}
