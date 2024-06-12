import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { NewComponent } from './components/new/new.component';
import { SkillGroupsService } from '@pages/skill-groups/skill-groups.service';
import { SkillsGroup } from '@pages/skill-groups/skills-group.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './skills.component.html',
})
export default class SkillsComponent implements OnInit, OnDestroy {

  skillGroup!: SkillsGroup;
  skillGroupSubs = new Subscription();
  routeSubs = new Subscription();

  constructor(
    private _dialog: MatDialog,
    private _skillGroupsService: SkillGroupsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubs = this._route.params.subscribe({
      next: (params: Params) => {
        this.skillGroupSubs = this._skillGroupsService.getById(params["skill_group_id"]).subscribe({
          next: (response: SkillsGroup) => {
            this.skillGroup = response;
            this.routeSubs.unsubscribe();
            this.skillGroupSubs.unsubscribe();
          }
        })
      }
    });
  }

  newSkillGroup(item?: Skill): void {
    const dialog = this._dialog.open(NewComponent, {
      width: '50%',
      data: item
    });

    dialog.afterClosed().subscribe((response: Skill) => {

      if (response) {
        this.skillGroup.skills.push(response);
      }
    });
  }

  ngOnDestroy(): void {
    this.skillGroupSubs.unsubscribe();
    this.routeSubs.unsubscribe();
  }
}
