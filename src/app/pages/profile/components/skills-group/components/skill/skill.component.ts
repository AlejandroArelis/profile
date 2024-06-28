import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() owner!: boolean;
  @Output() output: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.skill = {};
  }

  delete_skill(id: string) {
    this.output.emit(id);
  }

  ngOnInit(): void { }
}
