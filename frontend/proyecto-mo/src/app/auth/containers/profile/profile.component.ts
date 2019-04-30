import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { AuthState } from '../../store/auth.state';
import { Observable } from 'rxjs';
import { Auth } from '../../auth.models';

@Component({
  selector: 'mo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select(AuthState) user$: Observable<Auth>
  profileForm: FormGroup;

  submitForm(): void {
    for (const i in this.profileForm.controls) {
      this.profileForm.controls[i].markAsDirty();
      this.profileForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      firstSurname: ['', [Validators.required]],
      secondSurname: [''],
      nif: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    });

    this.user$.subscribe(user => {
      this.profileForm.setValue({
        email: user.email || '',
        name: user.name || '',
        firstSurname: user.firstSurname || '',
        secondSurname: user.secondSurname || '',
        nif: user.nif || '',
        address: user.address || '',
        zipCode: user.zipCode || '',
        country: user.country || '',
        phoneNumber: user.phoneNumber || '',
        birthday: user.birthday || ''
      })
    })

  }

}
