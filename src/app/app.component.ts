import { Component } from '@angular/core';
import { Animations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Animations.slider]
})
export class AppComponent {
  title = 'Skribbl';
}
