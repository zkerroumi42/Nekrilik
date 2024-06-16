import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Owner {
  id: string;
  nom: string;
  prenom: string;
  username:string;
  email:string;
  adress:string;
  phone:string;
}
@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrl: './list-owner.component.css'
})
export class ListOwnerComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username',"email", 'action'];
  dataSource: MatTableDataSource<any>;

  items: any[] = [
    { name: 'zakaria Filali', username: "zakaria1", email: 'zakaria1@gmail.com' },
    { name: 'Zakaria Ourassam', username: "zakaria2", email: 'zakaria2@gmail.com' },
    { name: 'zakaria Filali', username: "zakaria1", email: 'zakaria1@gmail.com' },
    { name: 'Zakaria Ourassam', username: "zakaria2", email: 'zakaria2@gmail.com' },
    { name: 'zakaria Filali', username: "zakaria1", email: 'zakaria1@gmail.com' },
    { name: 'Zakaria Ourassam', username: "zakaria2", email: 'zakaria2@gmail.com' },
    { name: 'zakaria Filali', username: "zakaria1", email: 'zakaria1@gmail.com' },
    { name: 'Zakaria Ourassam', username: "zakaria2", email: 'zakaria2@gmail.com' },
    
];

  @ViewChild(MatSort) sort!: MatSort;
  paginator: any;
  router: any;
  UserService: any;
  constructor() {
    this.dataSource = new MatTableDataSource(this.items);
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

  updateOwner(id: number): void {
    this.router.navigate(['/users/clients/update', id]);
  }

  deleteOwner(id: string): void {
    this.UserService.deleteClient(id).subscribe(() => {
      this.UserService.getClients().subscribe((owners: Owner[]) => {
        this.dataSource.data = owners;
      });
    });
  }
}