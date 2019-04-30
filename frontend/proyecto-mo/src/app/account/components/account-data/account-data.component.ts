import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mo-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent {

  isProfileFormVisible = true;

  toggleForm(isProfileClick: boolean) {
    if (
      (isProfileClick && this.isProfileFormVisible) ||
      (!isProfileClick && !this.isProfileFormVisible)
    ) {
      return;
    }
    this.isProfileFormVisible = !this.isProfileFormVisible;
  }

}
