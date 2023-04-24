import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortionManagerComponent } from './portion-manager.component';

const routes: Routes = [
  {
    path: '',
    component: PortionManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortionManagerRoutingModule {}
