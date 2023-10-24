import { Component, Input, OnInit } from '@angular/core';

export interface ItemListConfiguration {
  icon?: {
    type:string;
    value:string;
  };
  value?: string;
  text: string;
  type: string;
  href?: string;
  progress?: {
    color: string;
    value: number;
  }
}

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styles: [],
})
export class ItemListComponent implements OnInit {
  @Input() configuration: ItemListConfiguration;

  constructor() {
    this.configuration = {
      text: '',
      type: '',
    };
  }

  ngOnInit(): void {
    if(!this.configuration.href && this.configuration.type !== 'text') {
      switch (this.configuration.type) {
        case 'tel': {
          this.configuration.href = `tel:${this.configuration.value}`;
          break;
        }
        case 'mail': {
          this.configuration.href = `mailto:${this.configuration.value}`;
          break;
        }
      }
    }
  }
}
