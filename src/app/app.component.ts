import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[] = [];
  constructor(firestore: AngularFirestore) {
    firestore.collection('usuario').valueChanges({idField: 'id'}).subscribe( res => {

      this.items = res;

    })
  }

}
