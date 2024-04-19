import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent)
  },
  {
    path: "**",
    loadComponent: () => import("./pages/error/error.component").then(c => c.ErrorComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
