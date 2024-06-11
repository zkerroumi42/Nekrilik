import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { BookingComponent } from './booking/booking.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'create', component: CreateBookingComponent },
      { path: 'update/:id', component: UpdateBookingComponent },
      { path: '', component: ListBookingsComponent },
      { path: ':id', component: BookingComponent },

    ],
  },
];


@NgModule({
  declarations: [ListBookingsComponent, BookingComponent, CreateBookingComponent, UpdateBookingComponent,],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
        RouterModule.forChild(routes),
        
  ]
})
export class BookingsModule { }
