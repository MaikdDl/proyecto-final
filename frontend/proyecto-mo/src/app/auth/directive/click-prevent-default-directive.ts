import { HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[moPreventDefault]'
})

export class ClickPreventDefaultDirective {
  @HostListener('click', ['$event'])
  onclick(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}