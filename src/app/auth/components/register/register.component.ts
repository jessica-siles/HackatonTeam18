import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  validRoles = ['user', 'company']

  destroy$ = new Subject();

  registerAs: string = 'user';

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    linkedin: new FormControl('', [Validators.required]),
    repository: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  constructor(private router: ActivatedRoute, private authService: AuthService) {
    this.router.queryParams
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        tipo =>
          this.registerAs = this.validRoles.includes(tipo.as) ? tipo.as : 'user');
  }

  crearUsuario() {
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.createAccount({ ...this.registerForm.value, rol: this.registerAs });

  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    
    const pass2 = this.registerForm.get('password2')?.value;

    if ((pass1 !== pass2)) {
     
      return true;
    } else {
      return false;
    }

  }
  emailNoValido(campo: string): boolean {
    console.log(this.registerForm.get(campo)?.errors?.email);
    
    if (this.registerForm.get(campo)?.errors?.email) {
      return true;
    } else {
      return false;
    }

  }
  validarLargoPass(): boolean {
console.log(this.registerForm.get('password')?.value)
    if (this.registerForm.get('password')?.value.length <= 6) {
      return true;
    } else {
      return false;
    }

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
