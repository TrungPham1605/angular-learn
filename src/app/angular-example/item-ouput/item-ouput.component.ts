import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-ouput',
  standalone: true,
  imports: [],
  templateUrl: './item-ouput.component.html',
  styleUrl: './item-ouput.component.scss'
})
export class ItemOuputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
