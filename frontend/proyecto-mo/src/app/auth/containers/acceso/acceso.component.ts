import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, ControlContainer } from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Store } from "@ngxs/store";
import { Login } from '../../store/auth.actions';

@Component({
  selector: 'mo-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private store: Store) { }

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
}
