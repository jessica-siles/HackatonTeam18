import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['prueba@email.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    })
  }

  login() {
    this.loading = true
    this.authService.loginUser(this.form.value);
    this.loading = false
  }

}
