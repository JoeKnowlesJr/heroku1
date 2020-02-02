import { Component } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jkPortfolio';
  showLogin = false;
  showRegister = false;
  isLoggedIn: false;
  currentUser = User.none();

  goHome() {

  }

  onLoginClick() {
    if (this.showLogin) {
      this.showLogin = false;
    } else {
      this.showLogin = true;
      this.showRegister = false;
    }
  }

  onRegisterClick() {
    if (this.showRegister) {
      this.showRegister = false;
    } else {
      this.showRegister = true;
      this.showLogin = false;
    }
  }

  onLogoutClick() {

  }
}
