import { Component } from '@angular/core';

@Component({
  selector: 'app-vd02-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './vd02-string-interpolation.component.html',
  styleUrl: './vd02-string-interpolation.component.scss'
})
export class Vd02StringInterpolationComponent {
  myName = 'Angular';

  getNum(): number {
    return 1;
  }

}
