import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminGuard } from '../gaurds/admin.guard';
const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      
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
