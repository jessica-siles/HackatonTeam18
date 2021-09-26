import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formSubmitted: boolean = false;

 
  registerForm = new FormGroup({ 
    Usuario: new FormControl(null, [Validators.required]),
    Pais: new FormControl(null, [Validators.required]),
    Linkedin : new FormControl(null, [Validators.required]),
    Repositorio: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password2: new FormControl(null,[ Validators.required])
    
  },
  
    
  )

  constructor() { }

    crearUsuario() {
      this.formSubmitted = true;
      console.log( this.registerForm.value );
  
      if ( this.registerForm.invalid ) {
        console.log('No se pudo guardar')
        return;
        
      }
      
      // Realizar el posteo
    
  
  
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
    
  

}
