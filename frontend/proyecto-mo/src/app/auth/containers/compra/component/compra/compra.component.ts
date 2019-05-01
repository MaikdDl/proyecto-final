import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Auth } from 'src/app/auth/auth.models';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.state';

@Component({
  selector: 'mo-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
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

  url = window.location.pathname;
  cerrarPopup() {
    window.location.hash = "";
  }
}
