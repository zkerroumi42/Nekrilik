import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrl: './statistiques.component.css'
})
export class StatistiquesComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'poste', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;

  private staticEmployerData = [
    { id: 1, userName: 'John Doe', email: 'john.doe@example.com', poste: 'Manager' },
    { id: 2, userName: 'Jane Smith', email: 'jane.smith@example.com', poste: 'Developer' },
    { id: 3, userName: 'Michael Johnson', email: 'michael.johnson@example.com', poste: 'Designer' },
  ];
  paginator: any;

  constructor() {
    this.dataSource = new MatTableDataSource(this.staticEmployerData);
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

}
