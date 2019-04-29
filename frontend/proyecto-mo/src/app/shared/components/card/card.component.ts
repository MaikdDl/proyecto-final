import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  size = 'large';

  @Input() card;
  constructor() { }

  ngOnInit() {
  }

  // mercar() {
  //   if ()
  // }

}
