import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css'],
})
export class ListEmployerComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'poste', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  // Static employer data
  private staticEmployerData = [
    { id: 1, userName: 'John Doe', email: 'john.doe@example.com', poste: 'Manager' },
    { id: 2, userName: 'Jane Smith', email: 'jane.smith@example.com', poste: 'Developer' },
    { id: 3, userName: 'Michael Johnson', email: 'michael.johnson@example.com', poste: 'Designer' },
    // Add more static entries as needed
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.staticEmployerData);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
