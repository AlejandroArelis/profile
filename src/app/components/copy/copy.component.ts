import { Component, Input } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'copy',
  templateUrl: './copy.component.html',
  styles: [],
})
export class CopyComponent {
  @Input() value: string = '';
  @Input() type: string = 'icon';

  constructor(private _clipboard: Clipboard) {}

  copy() {
    this._clipboard.copy(this.value);
  }
}
