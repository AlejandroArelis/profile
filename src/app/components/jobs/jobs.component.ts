import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface JobConfiguration {
  title: string;
  company: string;
  location: string;
  dates: string;
  proyects: Proyect[];
}

interface Proyect {
  title: string;
  description: string;
}

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  standalone: true,
  imports: [CommonModule, ]
})
export class JobsComponent {
  @Input() configuration!: JobConfiguration;
}
