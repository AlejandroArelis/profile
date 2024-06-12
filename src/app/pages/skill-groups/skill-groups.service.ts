import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { SkillsGroup } from './skills-group.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillGroupsService {

  private apiUrl = `${environment.apiUrl}/skills-group`;

  private _http = inject(HttpClient);

  get(): Observable<SkillsGroup[]> {
    return this._http.get<SkillsGroup[]>(this.apiUrl);
  }

  getById(id: string): Observable<SkillsGroup> {
    return this._http.get<SkillsGroup>(`${this.apiUrl}/${id}`);
  }

  new(body: SkillsGroup): Observable<SkillsGroup> {
    return this._http.post<SkillsGroup>(this.apiUrl, body);
  }

  update(skillsGroup: SkillsGroup): Observable<SkillsGroup> {
    const { id, ...body } = skillsGroup;
    return this._http.put<SkillsGroup>(`${this.apiUrl}/${id}`, body);
  }

  delete(id: string): Observable<string> {
    return this._http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
