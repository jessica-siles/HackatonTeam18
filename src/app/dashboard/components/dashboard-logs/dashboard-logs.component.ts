
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-dashboard-logs',
  templateUrl: './dashboard-logs.component.html',
  styleUrls: ['./dashboard-logs.component.scss']
})
export class DashboardLogsComponent implements OnInit {
  
  user:any;

  
  constructor(private formBuilder: FormBuilder,private firestoreService: FirestoreService,private router: Router){
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    this.user = infoUser.user
  }
  form!: FormGroup;

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      empresa: [this.user.profile.username, [Validators.required]],
      idEmpresa: [this.user.uid, [Validators.required]]
    })

  }
  guardarBootcamp(){
    
    this.firestoreService.addBootcamps(
      this.form.value.descripcion,
      this.form.value.empresa,
      this.form.value.idEmpresa
      ).then( res => {
        this.router.navigate(['/','subscriptions'])
      } )
  }

}
