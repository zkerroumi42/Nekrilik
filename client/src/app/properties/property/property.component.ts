import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit {
  constructor() { }
  property: any;

  ngOnInit(): void {
    this.property = {
      id: 1,
      title: 'Beautiful Villa',
      description: 'Lorem ipsum dolor sit amet...',
      address: '123 Main Street',
      photo: '\assets\images\villa.jpeg',
      zipCode: '12345',
      propertyType: 'Villa',
      rentalType: 'Short-term',
      price: 200,
      propertyStatus: 'Available',
      maxGuests: 6
    };
  }
}
