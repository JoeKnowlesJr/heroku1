import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './_components/home/home.component';
// import {AuthGuard} from './auth.guard';
import {RegisterComponent} from './_components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
