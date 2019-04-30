import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  accountForm: FormGroup;

  submitForm(): void {
    for (const i in this.accountForm.controls) {
      this.accountForm.controls[i].markAsDirty();
      this.accountForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
      firstSurname: [null, [Validators.required]],
      secondSurname: [],
      nif: [null, [Validators.required]],
      address: [null, [Validators.required]],
      zipCode: [null, [Validators.required]],
      country: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      birthday: [null, [Validators.required]]
    });
  }

}
