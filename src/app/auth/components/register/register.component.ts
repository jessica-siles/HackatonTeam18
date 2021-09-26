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

  public formSubmitted: boolean = false;
  validRoles = ['user', 'company']

  destroy$ = new Subject();

  registerAs: string = 'user';
 
  registerForm = new FormGroup({ 
    username: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    linkedin: new FormControl(null, [Validators.required]),
    repository: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password2: new FormControl(null,[ Validators.required]),
    description: new FormControl(null,[ Validators.required]) 
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
      this.formSubmitted = true;
  
      if ( this.registerForm.invalid ) {
        console.log('No se pudo guardar')
        return;
      }
      
      this.authService.createAccount( {...this.registerForm.value, rol:this.registerAs} );
  
    }

    contrasenasNoValidas() {
      const pass1 = this.registerForm.get('password')?.value;
      const pass2 = this.registerForm.get('password2')?.value;
  
      if ( (pass1 !== pass2) && this.formSubmitted ) {
        return true;
      } else {
        return false;
      }
  
    }
    campoNoValido( campo: string ): boolean {

      if ( this.registerForm.get(campo)?.invalid && this.formSubmitted ) {
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
