import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { SkillGroup } from '@pages/skill-groups/skills-group.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiUrl = `${environment.apiUrl}/skill`;

  private _http = inject(HttpClient);

  get(skill_group_id: string): Observable<Skill[]> {
    return this._http.get<Skill[]>(`${this.apiUrl}/${skill_group_id}`);
  }

  new(body: Skill): Observable<Skill> {
    return this._http.post<Skill>(this.apiUrl, body);
  }

  update(skill: Skill): Observable<Skill> {
    return this._http.put<Skill>(`${this.apiUrl}/${skill.id}`, skill);
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
