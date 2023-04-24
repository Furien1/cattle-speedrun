import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'katalogus',
    loadChildren: () =>
      import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'szuksegletek',
    loadChildren: () =>
      import('./pages/portion-manager/portion-manager.module').then(
        (m) => m.PortionManagerModule
      ),
  },
  {
    path: 'marha-csoportok',
    loadChildren: () =>
      import('./pages/cattle-groups/cattle-groups.module').then(
        (m) => m.CattleGroupsModule
      ),
  },

  {
    path: 'adag-listak',
    loadChildren: () =>
      import('./pages/portion-lists/portion-lists.module').then(
        (m) => m.PortionListsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
