import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ques1Component } from './ques1/ques1.component';
import { AppComponent } from './app.component';
import { Q1Part2Component } from './q1-part2/q1-part2.component';
import { Q1UserFormComponent } from './q1-user-form/q1-user-form.component';
import { FormCrudComponent } from './form-crud/form-crud.component';

const routes: Routes = [
  {path:"*",component:AppComponent},
  {path:"q1",component:Ques1Component},
  {path:"q2",component:Q1Part2Component},
  {path:"q2_form",component:Q1UserFormComponent},
  {path:"form_crud",component:FormCrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
