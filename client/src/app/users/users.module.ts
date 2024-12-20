import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnerComponent } from './list-owners/list-owner.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'create', component: CreateUserComponent },
      { path: 'owners', component: ListOwnerComponent },
      { path: 'clients', component: ListClientsComponent },
      { path: 'details/:id', component: UserDetailsComponent },

    ],
  },
];



@NgModule({
  declarations: [
    ListOwnerComponent,
    ListClientsComponent,
    CreateUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
        MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ]
})
export class UsersModule { }
