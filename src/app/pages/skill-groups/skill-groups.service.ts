import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { SkillGroup } from './skills-group.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillGroupsService {

  private apiUrl = `${environment.apiUrl}/skill-group`;

  private _http = inject(HttpClient);

  get(): Observable<SkillGroup[]> {
    return this._http.get<SkillGroup[]>(this.apiUrl);
  }

  getById(id: string): Observable<SkillGroup> {
    return this._http.get<SkillGroup>(`${this.apiUrl}/${id}`);
  }

  new(body: SkillGroup): Observable<SkillGroup> {
    return this._http.post<SkillGroup>(this.apiUrl, body);
  }

  update(skillsGroup: SkillGroup): Observable<SkillGroup> {
    const { id, ...body } = skillsGroup;
    return this._http.put<SkillGroup>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
