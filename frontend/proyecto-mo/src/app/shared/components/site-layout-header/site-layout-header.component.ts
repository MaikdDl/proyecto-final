import { Component } from '@angular/core';
import { Logout } from 'src/app/auth/store/auth.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'mo-site-layout-header',
  templateUrl: './site-layout-header.component.html',
  styleUrls: ['./site-layout-header.component.scss']
})
export class SiteLayoutHeaderComponent {

  constructor(private store: Store) { }

  title = 'Morriña Online';

  logoutUser() {
    console.log('Logout');
    this.store.dispatch(new Logout());
  }
}
