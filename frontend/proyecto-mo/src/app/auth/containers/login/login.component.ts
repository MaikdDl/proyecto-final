import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ControlContainer } from "@angular/forms";
import { Store, Select } from "@ngxs/store";
import { Login, UpdateUrl, Logout, GetUserProfile } from '../../store/auth.actions';
import { Router } from '@angular/router';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Observable } from 'rxjs';
import { Auth } from "../../auth.models";
import { AuthState } from '../../store/auth.state';

@Component({
  selector: 'mo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  @Select(AuthState) user$: Observable<Auth>;

  validateForm: FormGroup;
  logoutIcon = faSignOutAlt;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  currentUser;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    },
      { updateOn: 'blur' }
    );
    this.user$.subscribe(user => {
      if (user && user.accessToken) {
        this.currentUser = user
      }
    })

  }

  login() {
    if (this.validateForm.valid) {
      this.store.dispatch(new Login(this.validateForm.value));
      this.user$.subscribe(user => { this.currentUser = user })
    }
  }

  openPopupRegister() {
    const url = window.location;

    this.store.dispatch(new UpdateUrl(url.pathname));
    window.location.href = (url.pathname + '#popup');
  }

  getUserProfile() {
    this.store.dispatch(new GetUserProfile());
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }
}
