import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { CommonModule } from '@angular/common';
import { SkillsGroupComponent } from './components/skills-group/skills-group.component';
import { ProfileService } from './profile.service';
import { Profile } from './profile.interface';
import { Subscription, firstValueFrom } from 'rxjs';
import { SkillComponent } from './components/skills-group/components/skill/skill.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CopyComponent } from '@components/copy/copy.component';
import { PhonePipe } from '@pipes/phone.pipe';
import { SessionService } from '@components/navbar/session/session.service';
import { Session } from '@components/navbar/session/session.interface';
import { FormsModule } from '@angular/forms';
import { SkillsGroup } from '@pages/skill-groups/skills-group.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    SkillsGroupComponent,
    JobComponent,
    SkillComponent,
    MatIcon,
    CopyComponent,
    PhonePipe,
    FormsModule
  ],
  templateUrl: './profile.component.html'
})
export default class ProfileComponent implements OnInit, OnDestroy {

  profile!: Profile;
  routeSubs = new Subscription();
  owner = false;
  editing = false;
  session!: Session;
  sessionSubs = new Subscription();
  newSkillGroup!: SkillsGroup;

  constructor(
    private _profileService: ProfileService,
    private _sessionService: SessionService,
    private _route: ActivatedRoute
  ) { }

  async ngOnInit() {

    this.routeSubs = this._route.params.subscribe(async (params: Params) => {
      this.sessionSubs = this._sessionService.session$.subscribe({
        next: async (session: Session) => {
          this.session = session;

          const user_name = params["user_name"];

          if (user_name) {
            console.log("jejejejejeje", user_name);
          } else if (this.session) {
            this.profile = await firstValueFrom(this._profileService.getProfile(this.session));
            this.owner = true;
          }
        }
      });

      // if (response["user_name"]) {
      //   this.profile = await firstValueFrom(this._profileService.getProfileByUsername(response["user_name"]));

      //   if (this.profile.azure_id === this.session.id) {
      //     this.editing = true;
      //   }
      // } else {
      //   this.profile = await firstValueFrom(this._profileService.getProfile(this.session));
      //   console.log(this.profile);
      // }
    });
  }

  async save() {
    try {
      this.profile = await firstValueFrom(this._profileService.save(this.profile));
      this.editing = false;
    } catch (e) {
      console.error(e);
    }
  }

  addSkillGroup() {
    // this.newSkillGroup 
  }

  ngOnDestroy(): void {
    this.routeSubs.unsubscribe();
    // this.sessionSubs.unsubscribe();
  }
}
