import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vd21-routing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vd21-routing.component.html',
  styleUrls: ['./vd21-routing.component.scss']
})
export class Vd21RoutingComponent {
  constructor(private router: Router) { }

  routerItem() {
    this.router.navigate(['/vd20']);
  }

  routerSegments() {
    this.router.navigate(['/', 'vd20']);
  }

  routerUrl() {
    this.router.navigateByUrl('/vd20');
  }
}
