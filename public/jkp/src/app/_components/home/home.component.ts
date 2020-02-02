import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.currentUser = this.auth.currentUserValue;
    if (this.currentUser != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

}
