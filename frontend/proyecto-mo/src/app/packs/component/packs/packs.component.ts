import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CardsState } from 'src/app/shared/components/card/store/card.state';
import { CardService } from 'src/app/shared/components/card/services/card.service';
import { GetPacks } from 'src/app/shared/components/card/store/card.actions';

@Component({
  selector: 'mo-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit {
  size = 'large';

  @Select(CardsState.getPacks) cards$;
  constructor(private store: Store, private cardService: CardService) { }

  ngOnInit() {
    this.store.dispatch(new GetPacks())
  }

  url = window.location.pathname;
  closePopup() {
    window.location.hash = "";

  }
}