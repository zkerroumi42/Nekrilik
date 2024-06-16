import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import 'datatables.net';
import 'datatables.net-bs4';

interface Booking {
  id: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  bookingStatus: string;
  appUserId: number;
  propertyId: number;
  dateBooked: Date;
}

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.css']
})
export class ListBookingsComponent implements OnInit {
  displayedColumns: string[] = ['startDate', 'endDate', 'totalPrice', 'bookingStatus', 'appUserId', 'propertyId', 'dateBooked', 'action'];
  dataSource: MatTableDataSource<Booking>;

  bookings: Booking[] = [
    {
      id: '1',
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-07-10'),
      totalPrice: 1500,
      bookingStatus: 'Confirmed',
      appUserId: 101,
      propertyId: 201,
      dateBooked: new Date('2024-06-01')
    },
    {
      id: '2',
      startDate: new Date('2024-08-01'),
      endDate: new Date('2024-08-15'),
      totalPrice: 3000,
      bookingStatus: 'Pending',
      appUserId: 102,
      propertyId: 202,
      dateBooked: new Date('2024-07-01')
    }
  ];

  @ViewChild(MatSort) sort!: MatSort;
  paginator: any;
  router: any;
  bookingService: any;

  constructor() {
    this.dataSource = new MatTableDataSource(this.bookings);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateBooking(id: string): void {
    this.router.navigate(['/bookings/update', id]);
  }

  deleteBooking(id: string): void {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.bookingService.getBookings().subscribe((bookings: Booking[]) => {
        this.dataSource.data = bookings;
      });
    });
  }
}
