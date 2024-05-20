import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CopyComponent } from '../../../../../../components/copy/copy.component';
import { Skill } from '../../../../../../interfaces/skill.interface';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule, CopyComponent]
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() {
    this.skill = {
      text: '',
      type: '',
    };
  }

  ngOnInit(): void {
    if(!this.skill.href && this.skill.type !== 'text') {
      switch (this.skill.type) {
        case 'tel': {
          this.skill.href = `tel:${this.skill.value}`;
          break;
        }
        case 'mail': {
          this.skill.href = `mailto:${this.skill.value}`;
          break;
        }
      }
    }
  }
}
