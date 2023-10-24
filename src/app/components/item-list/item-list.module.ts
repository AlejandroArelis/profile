import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ItemListComponent } from './item-list.component';
import { CopyModule } from '../copy/copy.module';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CopyModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }
