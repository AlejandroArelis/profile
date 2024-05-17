import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component")
  },
  {
    path: "example",
    loadComponent: () => import("./pages/example/example.component")
  },
  {
    path: "**",
    loadComponent: () => import("./pages/error/error.component")
  }
];
