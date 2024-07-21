import { Component, OnInit } from '@angular/core';
import { ShowContentMultiComponent } from "../show-content-multi/show-content-multi.component";

@Component({
  selector: 'app-vd11-content-projection',
  standalone: true,
  imports: [ShowContentMultiComponent],
  templateUrl: './vd11-content-projection.component.html',
  styleUrl: './vd11-content-projection.component.scss'
})
export class Vd11ContentProjectionComponent {
  constructor() { }

  ngOnInit(): void {
  }

}
