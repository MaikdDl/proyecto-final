import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ControlContainer } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Login, UpdateUrl, Logout } from '../../store/auth.actions';
import { Router } from '@angular/router';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'mo-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  validateForm: FormGroup;
  logoutIcon = faSignOutAlt;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.validateForm.valid) {
      this.store.dispatch(new Login(this.validateForm.value));
    }
  }

  abrirPopup() {
    const url = window.location;

    this.store.dispatch(new UpdateUrl(url.pathname));
    window.location.href = (url.pathname + '#popup');
  }

  logoutUser() {
    this.store.dispatch(new Logout());
  }
}
