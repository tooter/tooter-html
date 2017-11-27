import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes = [
  { path: '', component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
