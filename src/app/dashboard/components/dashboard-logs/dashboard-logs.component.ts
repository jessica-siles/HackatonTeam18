import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-dashboard-logs',
  templateUrl: './dashboard-logs.component.html',
  styleUrls: ['./dashboard-logs.component.scss']
})
export class DashboardLogsComponent implements OnInit {
  // allpost: any[] = [];
  // notEmptyPost = true;
  // notScrolly = true;
  user:any;

  // constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }
  constructor(private formBuilder: FormBuilder,private firestoreService: FirestoreService,private router: Router){
    let infoUser = JSON.parse(localStorage.getItem('hack-team-18')!);
    this.user = infoUser.user
  }
  form!: FormGroup;

  ngOnInit(): void {
    // this.loadInitPost()
    this.form = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      empresa: [this.user.profile.username, [Validators.required]],
      idEmpresa: [this.user.uid, [Validators.required]]
    })

  }
  guardarBootcamp(){
    // console.log(this.form.value)
    this.firestoreService.addBootcamps(
      this.form.value.descripcion,
      this.form.value.empresa,
      this.form.value.idEmpresa
      ).then( res => {
        this.router.navigate(['/','subscriptions'])
      } )
  }


  // loadInitPost() {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   this.http.get(url).subscribe((data: any) => {
  //     console.log(data)
  //     this.allpost = data
  //   })
  // }

  // onScroll() {
  //   console.log('scrolling')
  //   if (this.notScrolly && this.notEmptyPost) {

  //     this.spinner.show()
  //     this.notScrolly = false;
  //     this.loadNextPost();
  //   }
  // }
  // loadNextPost() {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   // return last post from the array
  //   const lastPost = this.allpost[this.allpost.length - 1];
  //   // get id of last post
  //   const lastPostId = lastPost.id;
  //   console.log(lastPostId)
  //   // sent this id as key value pare using formdata()
  //   const dataToSend = new FormData();
  //   dataToSend.append('title', 'titulo');
  //   dataToSend.append('body', 'a');
  //   dataToSend.append('userId', lastPostId);
  //   // call http request
  //   this.http.post(url, dataToSend)
  //     .pipe(
  //       delay(1000)
  //     )
  //     .subscribe((data: any) => {
  //       const newPost = data;
  //       console.log(data)
  //       this.spinner.hide();
  //       if (newPost.length === 0) {
  //         this.notEmptyPost = false;
  //       }
  //       // add newly fetched posts to the existing post
  //       this.allpost = this.allpost.concat(newPost);
  //       this.notScrolly = true;
  //     });
  // }
}
