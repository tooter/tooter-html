import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { ForumPostsWidgetComponent } from './components/forum-posts-widget/forum-posts-widget.component';
import { ForumPostWidgetItemComponent } from './components/forum-posts-widget/forum-post-widget-item/forum-post-widget-item.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { AboutUsWidgetComponent } from './components/about-us-widget/about-us-widget.component';
import { SubscribeWidgetComponent } from './components/subscribe-widget/subscribe-widget.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule(<NgModule>{
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    FeaturedPostComponent,
    ForumPostsWidgetComponent,
    ForumPostWidgetItemComponent,
    ArticleCardComponent,
    AboutUsWidgetComponent,
    SubscribeWidgetComponent,
    MainSidebarComponent,
    FooterComponent,
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
