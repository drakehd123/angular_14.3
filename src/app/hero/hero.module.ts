import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// import { NgModel } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';


const addCompo = [
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatRadioModule,
  // NgModel,
  // NgModule,
];



@NgModule({
  imports: [
    CommonModule,
    ...addCompo
  ],
  exports: [
    ...addCompo
  ]
  ,
  declarations: []
})
export class HeroModule { }
