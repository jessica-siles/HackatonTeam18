import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-logs',
  templateUrl: './dashboard-logs.component.html',
  styleUrls: ['./dashboard-logs.component.scss']
})
export class DashboardLogsComponent implements OnInit {
  allpost:any[] = [];
  notEmptyPost = true;
  notScrolly = true;


  constructor( private http:HttpClient,private spinner:NgxSpinnerService ) { }

  ngOnInit(): void {
    this.loadInitPost()
  }
  loadInitPost(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get(url).subscribe( (data:any) => {
      console.log(data)
      this.allpost = data
    } )
  }

  onScroll(){
    console.log('scrolling')
    if(this.notScrolly && this.notEmptyPost){

      this.spinner.show()
      this.notScrolly = false;
      this.loadNextPost();
    }
  }
  loadNextPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
  // return last post from the array
  const lastPost = this.allpost[this.allpost.length - 1];
  // get id of last post
  const lastPostId = lastPost.id;
  console.log(lastPostId)
  // sent this id as key value pare using formdata()
  const dataToSend = new FormData();
  dataToSend.append('title', 'titulo');
  dataToSend.append('body', 'a');
  dataToSend.append('userId', lastPostId);
  // call http request
  this.http.post(url, dataToSend)
  .pipe(
    delay(1000)
  )
  .subscribe( (data: any) => {
     const newPost = data;
     console.log(data)
     this.spinner.hide();
     if (newPost.length === 0 ) {
       this.notEmptyPost =  false;
     }
     // add newly fetched posts to the existing post
     this.allpost = this.allpost.concat(newPost);
     this.notScrolly = true;
   });
  }
}
