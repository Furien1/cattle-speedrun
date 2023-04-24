import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CattleGroupsComponent } from './cattle-groups.component';

const routes: Routes = [
  {
    path: '',
    component: CattleGroupsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CattleGroupsRoutingModule {}
