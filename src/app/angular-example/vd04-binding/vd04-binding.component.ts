import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vd04-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vd04-binding.component.html',
  styleUrl: './vd04-binding.component.scss'
})
export class Vd04BindingComponent {
  // Data binding
  recievedName = 'Trung';

  getName(): string {
    return 'Quoc';
  }

  imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAB2AAAAdgFOeyYIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOJJREFUOI2l00FKA0EQBdCnEYwnSMAj6NY7GDyHO4OapWfxLB7CiWshcSOoC8kyQ1xMN/S03SPqh4Kmf/2ifnU1dVzgBWvMBvKqWGMXYvUb4SHmiTjGPHBF3OAdSzQFcYxHPOEjaMAU7YCoFi0mB6HIrtBVg/twvsRpxvc0t9hmrY4TfpxZ26YWIjb6A8txnfCbeLlfSIS9H+6+WV5kFprMwpHuhVILi1h1qtu4UVZ0qT/Ek4xvccw/n3GkG8gnzvCMV0wKMxCsvYVu7/BQSqqt8pWBVS7hz58pYhaKrHBeS/oCeS9mKu6aC6kAAAAASUVORK5CYII=';
  lastName = 'Pham';
 
  handleClick(ev: MouseEvent): void {
    window.alert('Type: ' + ev.type);
  }
 
  age = 0;
  

}
