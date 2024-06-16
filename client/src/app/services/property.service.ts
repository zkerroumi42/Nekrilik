import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {}

  getAllProperties(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Properties');
  }

  getPropertyById(id: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Properties/${id}`);
  }
  getPropertiesByOwnerId(ownerId: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Properties/Owner/${ownerId}`);
  }

  addProperty(propertyData: any): Observable<any> {
    return this.http.post(
      `http://localhost:5111/api/Properties`,
      propertyData,
      { headers: this.authService.headers }
    );
  }
  updateProperty(id: string, propertyData: any): Observable<any> {
    return this.http.put(`http://localhost:5111/api/Properties/${id}`, propertyData, {
      headers: this.authService.headers,
    });
  }

  deleteProperty(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5111/api/Properties/${id}`, {
      headers: this.authService.headers,
    });
  }
  
  // search 
  getPropertyStats(): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Properties/stats`);
  }
  
}
