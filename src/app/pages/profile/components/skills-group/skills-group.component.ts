import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillComponent } from './components/skill/skill.component';
import { SkillGroup } from '@pages/skill-groups/skills-group.interface';
import { SortPipe } from '@pipes/sort.pipe';

@Component({
  selector: 'skills-group',
  standalone: true,
  imports: [
    CommonModule,
    SkillComponent,
    SortPipe
  ],
  templateUrl: './skills-group.component.html'
})
export class SkillsGroupComponent {
  @Input() skillsGroup!: SkillGroup | undefined;
  @Input() owner!: boolean;
  @Output() output: EventEmitter<string> = new EventEmitter<string>();

  delete_skill(id: string) {
    this.output.emit(id);
  }
}
