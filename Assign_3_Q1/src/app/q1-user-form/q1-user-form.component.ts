import { Component } from '@angular/core';

@Component({
  selector: 'app-q1-user-form',
  templateUrl: './q1-user-form.component.html',
  styleUrls: ['./q1-user-form.component.css']
})
export class Q1UserFormComponent {
  userData = {
    uname : "",
    email : "",
    dob : ""
  };
}
