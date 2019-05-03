import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateUrl, GetUserProfile } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'mo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  size = 'large';

  @Input() card;
  constructor(public store: Store) { }

  ngOnInit() {
  }

  getUserProfile() {
    this.store.dispatch(new GetUserProfile());
  }

  openPopup() {
    const url = window.location;

    this.store.dispatch(new UpdateUrl(url.pathname));
    window.location.href = (url.pathname + '#popup');
  }
}
