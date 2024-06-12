import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CopyComponent } from '../../../../../../components/copy/copy.component';
import { Skill } from './skill.interface';

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
      text: ''
    };
  }

  ngOnInit(): void { }
}
