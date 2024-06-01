import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminGuard } from '../gaurds/admin.guard';
import { CreatepalceComponent } from './createpalce/createpalce.component';
import { ClientComponent } from './client/client.component';
const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'client', component: ClientComponent },
      { path: 'owner', component: OwnerComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'createproperty', component: CreatepalceComponent, canActivate: [AdminGuard], providers: [AuthService, Permissions, HttpClientModule] }
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [AuthService, AdminGuard]
})
export class AuthModule { }
