import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TypographyModule } from 'src/app/shared/modules/typography/typography.module';
import { HomeModule } from './pages/home/home.module';
import { CatalogModule } from './pages/catalog/catalog.module';
import { PortionManagerModule } from './pages/portion-manager/portion-manager.module';
import { PortionListsModule } from './pages/portion-lists/portion-lists.module';
import { CattleGroupsModule } from './pages/cattle-groups/cattle-groups.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TypographyModule,
    HomeModule,
    PortionManagerModule,
    PortionListsModule,
    CattleGroupsModule,
    TypographyModule,
  ],
})
export class DashboardModule {}
