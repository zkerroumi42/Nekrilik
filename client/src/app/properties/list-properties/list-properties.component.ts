import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import 'datatables.net';
import 'datatables.net-bs4';


@Component({
  selector: 'app-list-properties',
  templateUrl: './list-properties.component.html',
  styleUrl: './list-properties.component.css'
})
export class ListPropertiesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'address', 'photo', 'zipCode', 'propertyType', 'rentalType', 'price', 'propertyStatus', 'maxGuests', 'action'];
  dataSource: MatTableDataSource<any>;

  properties: any[] = [
    { 
      id: 1, 
      title: 'Luxurious Beachfront Villa', 
      description: 'Beautiful villa located right on the beach', 
      address: '123 Beachfront Drive', 
      photo: 'villa.jpg', 
      zipCode: '12345', 
      propertyType: 'Villa', 
      rentalType: 'Short Term', 
      price: '$500 per night', 
      propertyStatus: 'Available', 
      maxGuests: 8 
    },
    { 
      id: 1, 
      title: 'Luxurious Beachfront Villa', 
      description: 'Beautiful villa located right on the beach', 
      address: '123 Beachfront Drive', 
      photo: 'villa.jpg', 
      zipCode: '12345', 
      propertyType: 'Villa', 
      rentalType: 'Short Term', 
      price: '$500 per night', 
      propertyStatus: 'Available', 
      maxGuests: 8 
    },
    { 
      id: 1, 
      title: 'Luxurious Beachfront Villa', 
      description: 'Beautiful villa located right on the beach', 
      address: '123 Beachfront Drive', 
      photo: 'villa.jpg', 
      zipCode: '12345', 
      propertyType: 'Villa', 
      rentalType: 'Short Term', 
      price: '$500 per night', 
      propertyStatus: 'Available', 
      maxGuests: 8 
    },
    

  ];
  

  @ViewChild(MatSort) sort!: MatSort;
  paginator: any;
  propertyService: any;
  router: any;

  constructor() {
    this.dataSource = new MatTableDataSource(this.properties);
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

  updateProperty(id: number): void {
    this.router.navigate(['/properties/update', id]);
  }

  deleteProperty(id: number): void {
    this.propertyService.deleteProperty(id).subscribe(() => {
      this.propertyService.getProperties().subscribe((properties:any[]) => {
        this.dataSource.data = properties;
      });
    });
  }


}