import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CopyComponent } from '../../../../../../components/copy/copy.component';
import { Skill } from './skill.interface';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '@pages/skills/skills.service';
import { firstValueFrom } from 'rxjs';
import { ProfileService } from '@pages/profile/profile.service';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CopyComponent,
    FormsModule
  ]
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  @Input() owner!: boolean;
  @Output() output: EventEmitter<string> = new EventEmitter<string>();

  editing = false;
  percentage = 0;

  constructor(
    private _profile_service: ProfileService
  ) {
    this.skill = {};
  }

  async update() {
    try {
      await firstValueFrom(this._profile_service.update_skill(this.skill));
      this.skill.percentage = this.percentage;
      this.editing = false;
    } catch (e) {
      console.error(e);
    }
  }

  delete_skill(id: string) {
    this.output.emit(id);
  }

  ngOnInit(): void { }
}
