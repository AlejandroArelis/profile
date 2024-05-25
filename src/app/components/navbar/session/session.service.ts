import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment as def } from '@environments/environment.defaults';
import { environment as dev } from '@environments/environment';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { Session } from './session.interface';
import { Profile } from '../../../pages/profile/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session = new Subject<Session>();
  session$ = this.session.asObservable();

  private _http = inject(HttpClient);

  get() {
    return this._http.get<Session>(def.apiConfig.uri);
  }
}
