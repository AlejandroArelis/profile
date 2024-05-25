import { Component, OnInit, inject } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { CommonModule } from '@angular/common';
import { SkillsGroupComponent } from './components/skils-group/skills-group.component';
import { ProfileService } from './profile.service';
import { Profile } from './profile.interface';
import { firstValueFrom } from 'rxjs';
import { PhonePipe } from '@pipes/phone.pipe';
import { SkillComponent } from './components/skils-group/components/skill/skill.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SkillsGroupComponent, JobComponent, SkillComponent],
  templateUrl: './profile.component.html'
})
export default class ProfileComponent implements OnInit {

  profile!:Profile;

  constructor(
    private _profileService: ProfileService
  ) { }

  async ngOnInit() {
    this.profile = await firstValueFrom(this._profileService.getProfile());

    this.profile.contact = {
      id: 0,
      name: "Contacto",
      skills: [{
        icon: {
          type: 'material',
          value: "mail"
        },
        value: this.profile.email,
        text: this.profile.email,
        type: "mail"
      }, {
        icon: {
          type: 'material',
          value: "call"
        },
        value: this.profile.phone,
        text: this.profile.phone,
        type: "tel"
      }, {
        icon: {
          type: 'material',
          value: "home_pin"
        },
        text: this.profile.city,
        type: "text"
      }]
    }
  }
}
