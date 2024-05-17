import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'copy',
  templateUrl: './copy.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule]
})
export class CopyComponent {
  @Input() value: string = '';
  @Input() type: string = 'icon';

  constructor(private _clipboard: Clipboard) {}

  copy() {
    this._clipboard.copy(this.value);
  }
}
