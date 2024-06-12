import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Skill } from '@pages/profile/components/skills-group/components/skill/skill.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = `${environment.apiUrl}/skills`;

  private _http = inject(HttpClient);

  get(): Observable<Skill[]> {
    return this._http.get<Skill[]>(this.apiUrl);
  }

  new(body: Skill): Observable<Skill> {
    return this._http.post<Skill>(this.apiUrl, body);
  }

  update(skillsGroup: Skill): Observable<Skill> {
    const { id, ...body } = skillsGroup;
    return this._http.put<Skill>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
