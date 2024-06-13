import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewComponent } from './components/new/new.component';
import { CommonModule } from '@angular/common';
import { Subscription, firstValueFrom } from 'rxjs';
import { SkillGroupsService } from './skill-groups.service';
import { SkillGroup } from './skills-group.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skill-groups',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    RouterLink
  ],
  templateUrl: './skill-groups.component.html'
})
export default class GroupsSkillsComponent implements OnInit, OnDestroy {

  skillsGroups: SkillGroup[] = [];
  skillsGroupsSubs = new Subscription();

  constructor(
    private _dialog: MatDialog,
    private _service: SkillGroupsService
  ) {

  }

  ngOnInit(): void {
    this.skillsGroupsSubs = this._service.get().subscribe((response: SkillGroup[]) => {
      this.skillsGroups = response;
    });
  }

  newSkillGroup(item?: SkillGroup): void {
    const dialog = this._dialog.open(NewComponent, {
      width: '50%',
      data: item
    });

    dialog.afterClosed().subscribe((response: SkillGroup) => {

      if (response) {
        this.skillsGroups.push(response);
      }
    });
  }

  async delete(id: string, index: number) {
    try {
      await firstValueFrom(this._service.delete(id));
      this.skillsGroups.splice(index, 1);
    } catch (e) {
      console.error(e);
    }
  }

  ngOnDestroy(): void {
    this.skillsGroupsSubs.unsubscribe();
  }
}
