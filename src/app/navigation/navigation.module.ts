import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing/navigation-routing.module';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationRoutingModule,
    MatSidenavModule,
  ],
  exports: [NavigationPageComponent],
  declarations: [
    NavigationPageComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
  ],
})
export class NavigationModule {}
