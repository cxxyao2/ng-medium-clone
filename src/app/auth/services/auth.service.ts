import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RegisterRequestInterface } from '../types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { Observable, map } from 'rxjs'
import { environment } from 'src/environments/environment.development'
import { AuthResponseInterface } from '../types/authResponse.interface'
import { LoginRequestInterface } from '../types/loginRequest.interface'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/auth/register`
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/auth/login`
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
}
