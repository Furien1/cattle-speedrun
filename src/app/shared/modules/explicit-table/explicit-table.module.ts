import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExplicitTableComponent } from './explicit-table.component';

@NgModule({
  declarations: [ExplicitTableComponent],
  imports: [CommonModule],
  exports: [ExplicitTableComponent],
})
export class ExplicitTableModule {}
