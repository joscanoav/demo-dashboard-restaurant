import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaymentOrdersComponent } from './pages/payment-orders/payment-orders.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: 'payment-orders',
    component: PaymentOrdersComponent,
    canActivate: [],
  },

  {
    path: 'users',
    component: UsersComponent,
    canActivate: [],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [],
  },
 
  { path: '**', redirectTo: '/404' },

  { path: 'login', component: LoginComponent },
];

