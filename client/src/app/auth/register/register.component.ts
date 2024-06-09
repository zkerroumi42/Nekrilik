import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  password: string = '';
  email: string = '';
  username: string = '';
  constructor(private authService: AuthService) { }
  onsubmit() {
    this.authService.registeruser(this.username, this.email, this.password).subscribe(
      response => {
        console.log('Successfully registered admin');
        window.location.href = '/';
      },
      error => {
        console.log(error.error)
      }
    );
  }
}
