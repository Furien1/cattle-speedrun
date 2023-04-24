import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortionListsComponent } from './portion-lists.component';

const routes: Routes = [
  {
    path: '',
    component: PortionListsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortionListsRoutingModule {}
