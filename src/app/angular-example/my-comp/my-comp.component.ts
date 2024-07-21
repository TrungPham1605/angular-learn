import { Attribute, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [],
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.scss'
})
export class MyCompComponent {
  @Input() firstName: string = '';

  lastName = '';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.lastName = this.elementRef.nativeElement.getAttribute('last-name');
  }

}
