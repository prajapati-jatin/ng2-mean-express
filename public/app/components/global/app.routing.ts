import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../comps/home.component';

const appRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

