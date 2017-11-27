import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FeaturedPostComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
