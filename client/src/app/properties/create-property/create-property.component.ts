import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  propertyTypes: string[] = ['House', 'Room',];
  rentalTypes: string[] = ['Day', 'Month'];
  propertyStatuses: string[] = ['Available', 'Rented', 'UnderMaintenance','Unavailable'];


  constructor() {
    };
  

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("en submit");
  }
}
