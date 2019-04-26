import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Actions, Store, ofAction } from '@ngxs/store';
import { RegisterSuccess, Register } from '../../store/auth.actions';


@Component({
  selector: 'mo-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.scss']
})
export class RexistroComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nombre: [null, [Validators.required]],
      apellido1: [null, [Validators.required]],
      apellido2: [null, [Validators]],
      agree: [false]
    }),
      this.actions$
        .pipe(ofAction(RegisterSuccess))
        .subscribe(() => this.validateForm.reset());
  }

  register() {
    if (!this.validateForm.valid) {
      this.markFormGroupAsTouched(this.validateForm);
      return;
    }

    this.store.dispatch(new Register(this.validateForm.value));
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control =>
      control.markAsTouched());
  }
  url = window.location.pathname;
  cerrarPopup() {
    window.location.href = this.url.replace('#popup', '');
  }

}
