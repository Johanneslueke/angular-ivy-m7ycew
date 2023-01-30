import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing/navigation-routing.module';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationRoutingModule],
  exports: [NavigationPageComponent],
  declarations: [NavigationPageComponent],
})
export class NavigationModule {}
