import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ShowUserOrders } from '../../store/auth.actions';
import { AuthState } from '../../store/auth.state';
import { Observable } from 'rxjs';
import { Auth } from '../../auth.models';

@Component({
  selector: 'mo-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input() order;
  constructor(public store: Store) { }

  ngOnInit() {
    this.store.dispatch(new ShowUserOrders());
  }

}
