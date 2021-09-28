import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-dashboard-bootcamps-empresa',
  templateUrl: './dashboard-bootcamps-empresa.component.html',
  styleUrls: ['./dashboard-bootcamps-empresa.component.scss']
})
export class DashboardBootcampsEmpresaComponent implements OnInit {

  public disab = true;
  public textoDescripcion = ''
  cardMostrado = false;
  bootcamP:any;

  constructor(private firestoreService: FirestoreService,private router: Router) { }

  ngOnInit(): void {
    this.getBootcampsSegunEmpresa();
  }
  bootcampsArray: any[] = [];
 
  getBootcampsSegunEmpresa(){
    let inscriptionsArray:any[] = [];
    this.firestoreService.getBootcampsPorEmpresa().then(bootcamps => {
      bootcamps.forEach((bootcamp: any) => {

        this.firestoreService.getInscripcion(bootcamp.id).then( inscriptions => {

          inscriptions.forEach(inscription => {
              if(inscription.data().estado != false){

                inscriptionsArray.push(inscription.data())
              }
          })
          
          this.bootcampsArray.push({
            id : bootcamp.id,
            descripcion : bootcamp.data().descripcion,
            empresa :bootcamp.data().empresa,
            estado : bootcamp.data().estado,
            idEmpresa: bootcamp.data().idEmpresa,
            inscripciones: inscriptionsArray
          });

          inscriptionsArray = [];
        })
      })
    })
  }

  eliminarBootcamp(bootcamp:any){
    this.firestoreService.deleteBootcamp(bootcamp.descripcion,bootcamp.empresa,bootcamp.idEmpresa,bootcamp.id).then(e=> {
      this.router.navigate(['/','subscriptions'])
    })
  }

  confirmarEdit(bootcamp:any){
    
    this.firestoreService.editBootcamp(bootcamp.descripcion,bootcamp.empresa,bootcamp.idEmpresa,bootcamp.id).then(e=> {
      this.router.navigate(['/','subscriptions'])
    })
  }
  
}
