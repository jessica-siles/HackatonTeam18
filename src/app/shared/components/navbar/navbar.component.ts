import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { AccountModel } from '../../../auth/models/account.model';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  menu: Array<any> = [
    {
      path: ['/', 'ownbootcamps'],
      name: 'Mis Bootcamps',
      role: ['company'],
    },
    {
      path: ['/', 'inscriptions'],
      name: 'Mis Inscripción',
      role: ['user'],
    },
    {
      path: ['/', 'logs'],
      name: 'Crear Bootcamp',
      role: ['company'],
    },
  ]
  user!: any;
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    const { profile } = this.userService.currentUser()
    this.user = profile;
  }

  logout() {
    this.authService.logoutUser()
  }

}
