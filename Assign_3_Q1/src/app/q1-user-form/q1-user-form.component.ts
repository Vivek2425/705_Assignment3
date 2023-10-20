import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-q1-user-form',
  templateUrl: './q1-user-form.component.html',
  styleUrls: ['./q1-user-form.component.css']
})
export class Q1UserFormComponent {
  userform:FormGroup;
  showdata=false;
  constructor(){
    this.userform=new FormGroup({
      uname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
      dob:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      hobbies:new FormGroup({
        sports : new FormControl(false),
        reading : new FormControl(false),
        adventure : new FormControl(false)
      }),
      profile:new FormControl('',Validators.required),
    })
  }
  onsubmit():void{
    console.log(this.userform.value);
    this.showdata = true;
  }
  // userForm:FormGroup;
  // constructor(){
  //   this.userForm=new FormGroup({
  //     name:new FormControl('',Validators.required),
  //     email:new FormControl('',Validators.required),
  //     password:new FormControl('',Validators.required),
  //     bod:new FormControl(''),
  //     gender:new FormControl('')
  //   })
  // }

  // onSubmit():void{
  //   console.log(this.userForm)
  // }
}
