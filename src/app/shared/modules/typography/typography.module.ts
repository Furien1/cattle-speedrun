import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';
import { Heading1Component } from './heading1/heading1.component';
import { Heading2Component } from './heading2/heading2.component';
import { ButtonTextSComponent } from './button-text-s/button-text-s.component';
import { ButtonTextLComponent } from './button-text-l/button-text-l.component';



@NgModule({
  declarations: [
    Body1Component,
    Body2Component,
    Heading1Component,
    Heading2Component,
    ButtonTextSComponent,
    ButtonTextLComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TypographyModule { }
