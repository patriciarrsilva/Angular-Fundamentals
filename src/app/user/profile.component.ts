import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const firstName = new FormControl(
      this.authService.currentUser.firstName
    );
    const lastName = new FormControl(
      this.authService.currentUser.lastName
    );

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(
      formValues.firstName,
      formValues.lastName
    );

    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
