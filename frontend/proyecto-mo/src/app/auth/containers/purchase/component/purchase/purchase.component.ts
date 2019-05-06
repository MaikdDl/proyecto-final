import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Auth } from 'src/app/auth/auth.models';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.state';
import { UpdateUrl } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'mo-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  @Select(AuthState) user$: Observable<Auth>;

  currentUser;
  constructor(private store: Store) { }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user && user.accessToken) {
        this.currentUser = user
      }
    })
  }

  openPopup() {
    const url = window.location;

    this.store.dispatch(new UpdateUrl(url.pathname));
    window.location.href = (url.pathname + '#popup');
  }

  url = window.location.pathname;
  closePopup() {
    window.location.hash = "";
  }
}
