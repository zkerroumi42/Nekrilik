import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Client {
  id: string;
  nom: string;
  prenom: string;
  username:string;
  email:string;
  adress:string;
  phone:string;
}
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'] 
})
export class ListClientsComponent implements OnInit {
  displayedColumns: string[] = ['id','nom', 'prenom', 'username', 'email', 'adress', 'phone', 'action'];
  dataSource: MatTableDataSource<any>;

  clients: any[] = [
    { nom: 'Doe', prenom: 'John', username: 'johndoe', email: 'john.doe@example.com', adress: '123 Main St', phone: '123-456-7890'}
  ];

  @ViewChild(MatSort) sort!: MatSort;
  router: any;
  clientService: any;
  UserService: any;

  constructor() {
    this.dataSource = new MatTableDataSource(this.clients);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateClient(id: number): void {
    this.router.navigate(['/users/clients/update', id]);
  }

  deleteClient(id: string): void {
    this.UserService.deleteClient(id).subscribe(() => {
      this.UserService.getClients().subscribe((clients: Client[]) => {
        this.dataSource.data = clients;
      });
    });
  }
}