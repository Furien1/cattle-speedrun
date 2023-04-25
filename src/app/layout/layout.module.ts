import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '../shared/modules/button/button.module';
import { TypographyModule } from '../shared/modules/typography/typography.module';
@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCommonModule,
    RouterModule,
    ButtonModule,
    TypographyModule,
  ],
})
export class LayoutModule {}
