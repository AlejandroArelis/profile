import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobComponent } from './components/job/job.component';
import { CommonModule } from '@angular/common';
import { SkillsGroupComponent } from './components/skills-group/skills-group.component';
import { ProfileService } from './profile.service';
import { Profile } from './interfaces/profile.interface';
import { Subscription, firstValueFrom } from 'rxjs';
import { SkillComponent } from './components/skills-group/components/skill/skill.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { CopyComponent } from '@components/copy/copy.component';
import { PhonePipe } from '@pipes/phone.pipe';
import { SessionService } from '@components/navbar/session/session.service';
import { Session } from '@components/navbar/session/session.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SkillGroup } from '@pages/skill-groups/skills-group.interface';
import { SkillsService } from '@pages/skills/skills.service';
import { Skill } from './components/skills-group/components/skill/skill.interface';
import { ToastrService } from 'ngx-toastr';

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
    FormsModule,
    ReactiveFormsModule
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
  avalible_skills_subs = new Subscription();
  newSkillGroup!: SkillGroup;
  avalible_skills: Skill[] = [];
  new_skill_form!: FormGroup;

  constructor(
    private _profileService: ProfileService,
    private _sessionService: SessionService,
    private _skill_service: SkillsService,
    private _route: ActivatedRoute,
    private _toastr: ToastrService,
    private _form_builder: FormBuilder
  ) {
    this.new_skill_form = this._form_builder.group({
      skill_id: ["Elige una habilidad", [Validators.required]],
      percentage: [0, [Validators.required, Validators.min(1), Validators.max(100)]],
      profile_id: ""
    });
  }

  async ngOnInit() {

    this.routeSubs = this._route.params.subscribe(async (params: Params) => {
      this.sessionSubs = this._sessionService.session$.subscribe({
        next: async (session: Session) => {
          this.session = session;

          const user_name = params["user_name"];

          if (user_name) {
            console.log("jejejejejeje", user_name);
            this.profile = await firstValueFrom(this._profileService.getProfileByUsername(user_name));
          } else if (this.session) {
            this.profile = await firstValueFrom(this._profileService.getProfile(this.session));
            this.owner = true;
          }

          this.avalible_skills_subs = this._skill_service.get_avalibles(this.profile.id).subscribe({
            next: (skills: Skill[]) => {
              this.avalible_skills = skills;
            }
          });
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

  async save_new_skill() {
    try {
      this.new_skill_form.get("profile_id")?.setValue(this.profile.id);
      const response = await firstValueFrom(this._profileService.save_new_skill(this.new_skill_form.value));

      if (!this.profile.skill_groups?.some((skill_group: SkillGroup) => skill_group.id == response.id)) {
        this.profile.skill_groups?.push(response);
      } else {
        this.profile.skill_groups.forEach((skill_group: SkillGroup, index: number) => {
          if (skill_group.id == response.id && this.profile.skill_groups) {
            this.profile.skill_groups[index] = response;
          }
        });
      }

      
      this.avalible_skills = this.avalible_skills.filter((skill:Skill) => skill.id != this.new_skill_form.value.skill_id);
      this.new_skill_form.reset();
    } catch (e: any) {
      console.error(e);
      this._toastr.error(e.error.detail);
    }
  }

  ngOnDestroy(): void {
    this.routeSubs.unsubscribe();
    this.avalible_skills_subs.unsubscribe();
    // this.sessionSubs.unsubscribe();
  }
}
