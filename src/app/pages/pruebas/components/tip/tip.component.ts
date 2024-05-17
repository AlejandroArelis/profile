import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tip } from '../../interfaces/tip.interface';

@Component({
  selector: 'tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TipComponent {
  @Input() id: number = 0;
  @Input() data!: Tip;
}
