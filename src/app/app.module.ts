import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './shared/modules/button/button.component';
import { TypographyComponent } from './shared/modules/typography/typography.component';
import { ExplicitTableComponent } from './shared/modules/explicit-table/explicit-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TypographyComponent,
    ExplicitTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
