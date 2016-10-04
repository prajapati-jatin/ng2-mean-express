import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../comps/home.component';
import { LoginComponent } from '../comps/login-form.component';
import { LogoutComponent } from '../comps/logout.component';
import { DashboardComponent } from '../comps/dashboard.component';

const appRoutes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

