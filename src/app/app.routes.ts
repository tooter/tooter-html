import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'post-detail', component: PostDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
