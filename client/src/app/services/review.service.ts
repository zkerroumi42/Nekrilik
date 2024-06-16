import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {}

  getAllReviews(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Reviews');
  }

  addReview(reviewData: any): Observable<any> {
    return this.http.post(
      `http://localhost:5111/api/Review/Create`,
      reviewData,
      { headers: this.authService.headers }
    );
  }
  getAllReviewsByProperty(propertyId: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Review/getAllReviewsByProperty`, {
      params: { PropertyId: propertyId }
    });
  }

  //
  getReviewById(id: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Reviews/${id}`);
  }

  getReviewsByUserId(userId: string): Observable<any> {
    return this.http.get(`http://localhost:5111/api/Reviews/User/${userId}`);
  }

  getAllStatistiques(): Observable<any> {
    return this.http.get('http://localhost:5111/api/Statistiques/getAllStatistiques');
  }

}
