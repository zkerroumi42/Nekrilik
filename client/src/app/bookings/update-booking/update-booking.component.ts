import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrl: './update-booking.component.css'
})
export class UpdateBookingComponent {

  updateBookingForm: FormGroup;
  bookingId: string;
  bookingStatuses = ['Pending','Cancelled','Confirmed'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {
    this.updateBookingForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      totalPrice: ['', [Validators.required, Validators.min(0)]],
      bookingStatus: ['', Validators.required],
      appUserId: ['', [Validators.required, Validators.min(1)]],
      propertyId: ['', [Validators.required, Validators.min(1)]]
    });

    this.bookingId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.bookingService.getBookingById(this.bookingId).subscribe(booking => {
      this.updateBookingForm.patchValue(booking);
    });
  }

  onSubmit(): void {
    if (this.updateBookingForm.valid) {
      this.bookingService.updateBooking(this.bookingId, this.updateBookingForm.value).subscribe(() => {
        this.router.navigate(['/bookings']);
      });
    }
  }

}
