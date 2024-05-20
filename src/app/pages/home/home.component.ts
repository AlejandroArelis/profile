import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillComponent } from '../profile/components/skils-group/components/skill/skill.component';
import { JobComponent } from '../profile/components/job/job.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CommonModule, SkillComponent, JobComponent]
})
export default class HomeComponent {
  
}
