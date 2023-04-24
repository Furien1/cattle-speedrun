import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent, NavigationComponent],
  imports: [CommonModule, MatSidenavModule, MatListModule],
  exports: [MatSidenavModule, MatListModule],
})
export class LayoutModule {}
