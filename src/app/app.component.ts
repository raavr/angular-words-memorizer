import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {

}

