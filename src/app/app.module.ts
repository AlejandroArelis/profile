import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ItemListModule } from './components/item-list/item-list.module';
import { JobsModule } from './components/jobs/jobs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ItemListModule,
    JobsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
