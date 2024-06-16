import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {}


  getBookings(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Bookings');
  }


  getBookingById(id: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Bookings/${id}`);
  }

  getBookingsByClientId(userId: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Bookings/User/${userId}`);
  }

  addBooking(date: any, duration: any, type: any): Observable<any> {
    return this.http.post(
      `http://localhost:5111/api/Bookings`,
      {
        date: date,
        duration: duration,
        type: type,
      },
      { headers: this.authService.headers }
    );
  }

  updateBooking(id: string, bookingData: any): Observable<any> {
    return this.http.put(`http://localhost:5111/api/Bookings/${id}`, bookingData, {
      headers: this.authService.headers,
    });
  }

  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`http://localhost:5111/api/Bookings/${id}`, {
      headers: this.authService.headers,
    });
  }

}
