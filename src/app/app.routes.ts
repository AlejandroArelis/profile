import { Routes } from '@angular/router';
import ErrorComponent from './pages/error/error.component';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/profile/profile.component")
  },
  {
    path: "user/:user_name",
    loadComponent: () => import("./pages/profile/profile.component")
  },
  {
    path: "example",
    loadComponent: () => import("./pages/example/example.component")
  },
  {
    path: 'login-failed',
    loadComponent: () => import("./pages/error/error.component")
  },
  {
    path: "**",
    loadComponent: () => import("./pages/error/error.component")
  }
];
