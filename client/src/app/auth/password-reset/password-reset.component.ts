import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: FormGroup;
  isSubmitted = false;
  isRequestSuccessful = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get formControls() { return this.passwordResetForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    if (this.passwordResetForm.invalid) {
      return;
    }

    this.authService.requestPasswordReset(this.passwordResetForm.value.email)
      .subscribe(
        response => {
          this.isRequestSuccessful = true;
        },
        error => {
          this.errorMessage = 'There was an error processing your request. Please try again later.';
        }
      );
  }
}
