import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {}

  getAdminProfile(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Users/Profile', {
      headers: this.authService.headers,
    });
  }

  updateAdminProfile(profileData: any): Observable<any> {
    return this.http.put('http://localhost:5111/api/Users/Profile', profileData, {
      headers: this.authService.headers,
    });
  }

  changeUserPassword(passwordData: any): Observable<any> {
    return this.http.put('http://localhost:5111/api/Users/ChangePassword', passwordData, {
      headers: this.authService.headers,
    });
  }

  //owners

  getAllOwners(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Owners');
  }
  getOwnerById(id: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Owners/${id}`);
  }
  addOwner(userData: any): Observable<any> {
    return this.http.post(
      `http://localhost:5111/api/Users`,
      userData,
      { headers: this.authService.headers }
    );
  }
  updateOwner(id: string, userData: any): Observable<any> {
    return this.http.put(`http://localhost:5111/api/Users/${id}`, userData, {
      headers: this.authService.headers,
    });
  }

  // clients
  getAllClients(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Clients');
  }

  getClientById(id: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Clients/${id}`);
  }
  addClient(userData: any): Observable<any> {
    return this.http.post(
      `http://localhost:5111/api/Users`,
      userData,
      { headers: this.authService.headers }
    );
  }

    updateClient(id: string, userData: any): Observable<any> {
    return this.http.put(`http://localhost:5111/api/Users/${id}`, userData, {
      headers: this.authService.headers,
    });
  }
}
