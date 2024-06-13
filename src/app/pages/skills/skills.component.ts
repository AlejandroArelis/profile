import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { NewComponent } from './components/new/new.component';
import { SkillGroupsService } from '@pages/skill-groups/skill-groups.service';
import { SkillGroup } from '@pages/skill-groups/skills-group.interface';
import { Subscription, firstValueFrom } from 'rxjs';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skills.component.html',
})
export default class SkillsComponent implements OnInit, OnDestroy {
  skillGroup!: SkillGroup;
  skillGroupSubs = new Subscription();
  skillSubs = new Subscription();
  routeSubs = new Subscription();
  ready = false;

  constructor(
    private _dialog: MatDialog,
    private _skillGroupsService: SkillGroupsService,
    private _service: SkillsService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubs = this._route.params.subscribe({
      next: (params: Params) => {
        this.skillGroupSubs = this._skillGroupsService
          .getById(params['skill_group_id'])
          .subscribe({
            next: (response: SkillGroup) => {
              this.skillGroup = response;
              if (this.skillGroup.id) {
                this.skillGroupSubs = this._service
                  .get(this.skillGroup.id)
                  .subscribe({
                    next: (response: Skill[]) => {
                      this.skillGroup.skills = response;
                      this.ready = true;
                      this.skillSubs.unsubscribe();
                      this.skillGroupSubs.unsubscribe();
                      this.routeSubs.unsubscribe();
                    },
                  });
              }
            },
          });
      },
    });
  }

  newSkillGroup(item?: Skill): void {

    const dialog = this._dialog.open(NewComponent, {
      width: '50%',
      data: item,
    });

    dialog.afterClosed().subscribe((response: Skill) => {
      if (response) {
        this.skillGroup.skills.push(response);
      }
    });
  }

  async delete(id: string, index: number) {
    try {
      await firstValueFrom(this._service.delete(id));
      this.skillGroup.skills.splice(index, 1);
    } catch (e) {
      console.error(e);
    }
  }

  ngOnDestroy(): void {
    this.skillGroupSubs.unsubscribe();
    this.routeSubs.unsubscribe();
  }
}
