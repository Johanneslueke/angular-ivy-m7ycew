import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NavigationPageComponent } from '../navigation-page/navigation-page.component';

const ROUTES: Array<Route> = [
  {
    path: 'list',
    component: NavigationPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  declarations: [],
})
export class NavigationRoutingModule {}
