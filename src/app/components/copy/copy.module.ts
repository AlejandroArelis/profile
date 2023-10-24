import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyComponent } from './copy.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CopyComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CopyComponent
  ]
})
export class CopyModule { }
