import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CattleGroupsComponent } from './pages/cattle-groups/cattle-groups.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortionListsComponent } from './pages/portion-lists/portion-lists.component';
import { PortionManagerComponent } from './pages/portion-manager/portion-manager.component';
import { TypographyModule } from 'src/app/shared/modules/typography/typography.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CattleGroupsComponent,
    NotFoundComponent,
    PortionListsComponent,
    PortionManagerComponent,
    HomeComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, TypographyModule],
})
export class DashboardModule {}
