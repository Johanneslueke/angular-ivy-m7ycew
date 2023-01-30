import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDBService } from './services/in-memory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavigationPageComponent } from './navigation/navigation-page/navigation-page.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NavigationPageComponent,
      },
    ]),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDBService),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
