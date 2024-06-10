import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrl: './update-property.component.css'
})
export class UpdatePropertyComponent implements OnInit{

  propertyTypes: string[] = ['House', 'Apartment', 'Condo', 'Townhouse', 'Villa'];
  rentalTypes: string[] = ['Long Term', 'Short Term', 'Vacation Rental'];
  propertyStatuses: string[] = ['Active', 'Inactive', 'Sold'];

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("en submit");
  }
}
