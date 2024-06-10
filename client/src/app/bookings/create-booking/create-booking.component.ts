import { Component } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent {
  bookingStatuses: string[] = ['Pending', 'Confirmed', 'Cancelled'];

  constructor() {
    };
  

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("en submit");
  }
}
