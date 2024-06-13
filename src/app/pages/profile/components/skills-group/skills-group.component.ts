import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { SkillGroup } from '@pages/skill-groups/skills-group.interface';

@Component({
  selector: 'skills-group',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills-group.component.html'
})
export class SkillsGroupComponent {
  @Input() skillsGroup!: SkillGroup | undefined;
}
