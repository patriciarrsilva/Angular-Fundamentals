import { Component } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userName;
  password;

  /* constructor(
     private authService: AuthService,
    private router: Router
  ) {} */

  login(formValues) {
    console.log(formValues);
    /* this.authService.loginUser(
      formValues.userName,
      formValues.password
    );
    this.router.navigate(['events']); */
  }

  /* cancel() {
    this.router.navigate(['events']);
  } */
}
