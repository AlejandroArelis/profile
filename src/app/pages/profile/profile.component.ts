import { Component, OnInit, inject } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { CommonModule } from '@angular/common';
import { Skill } from '../../interfaces/skill.interface';
import { Job } from '../../interfaces/job.interface';
import { SkillsGroupComponent } from './components/skils-group/skills-group.component';
import { ProfileService } from './profile.service';
import { Profile } from './profile.interface';
import { SkillComponent } from './components/skils-group/components/skill/skill.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SkillsGroupComponent, JobComponent, SkillComponent],
  templateUrl: './profile.component.html',
  styles: ``
})
export default class ProfileComponent implements OnInit {

  profile!:Profile;

  _profileService = inject(ProfileService);

  ngOnInit(): void {
    this.profile = this._profileService.got();
  }
}
