import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { Skill } from '../../../../interfaces/skill.interface';
import { SkillsGroup } from './skills-group.interface';

@Component({
  selector: 'skills-group',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills-group.component.html'
})
export class SkillsGroupComponent {
  @Input() skillsGroup!: SkillsGroup;
}
