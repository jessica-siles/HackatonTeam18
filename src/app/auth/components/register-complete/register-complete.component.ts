import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register-complete',
  templateUrl: './register-complete.component.html',
  styleUrls: ['./register-complete.component.scss']
})
export class RegisterCompleteComponent implements OnInit {

  destroy$ = new Subject();

  constructor(private router: ActivatedRoute) {
    this.router.queryParams
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe( data => console.log('data', data));
  }

  success= true;
  error= '';

  ngOnInit(): void {
  }

}
