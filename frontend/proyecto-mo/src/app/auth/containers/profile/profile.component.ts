import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '../../store/auth.state';
import { Observable } from 'rxjs';
import { Profile } from '../../auth.models';
import { UpdateUserProfile } from '../../store/auth.actions';


@Component({
  selector: 'mo-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select(AuthState) user$: Observable<Profile>

  submitForm(): void {
    for (const i in this.profileForm.controls) {
      this.profileForm.controls[i].markAsDirty();
      this.profileForm.controls[i].updateValueAndValidity();
    }
  }
  profileForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      firstSurname: ['', [Validators.required]],
      secondSurname: [''],
      nif: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );
  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.profileForm.setValue({
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
    });
  }

  updateProfile() {
    if (!this.profileForm.valid) {
      return;
    }
    this.store.dispatch(new UpdateUserProfile(this.profileForm.value));
  }
}

