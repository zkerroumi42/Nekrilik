import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  propertyTypes: string[] = ['House', 'Apartment', 'Condo', 'Townhouse', 'Villa'];
  rentalTypes: string[] = ['Long Term', 'Short Term', 'Vacation Rental'];
  propertyStatuses: string[] = ['Active', 'Inactive', 'Sold'];

  constructor() {
    };
  

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("en submit");
  }
}
