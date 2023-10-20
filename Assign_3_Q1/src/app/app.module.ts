import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques1Component } from './ques1/ques1.component';
import { Q1Part2Component } from './q1-part2/q1-part2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Q1UserFormComponent } from './q1-user-form/q1-user-form.component';
import { FormCrudComponent } from './form-crud/form-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    Ques1Component,
    Q1Part2Component,
    Q1UserFormComponent,
    FormCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
