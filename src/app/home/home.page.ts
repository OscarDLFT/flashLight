import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  active: boolean = false;

  constructor() {}

  flash(): void {
    this.active = !this.active;
  }

}
