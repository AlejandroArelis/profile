import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job } from './job.interface';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  standalone: true,
  imports: [CommonModule, ]
})
export class JobComponent {
  @Input() job!: Job;
}
