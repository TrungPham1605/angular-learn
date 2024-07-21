import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vd08-interaction-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vd08-interaction-comp.component.html',
  styleUrl: './vd08-interaction-comp.component.scss'
})
export class Vd08InteractionCompComponent {
  @Output() returnData = new EventEmitter<string>();
  items: string[] = [];

  processData(inputValue: string) {
    if (inputValue) {
      const uppercasedValue = inputValue.toUpperCase();
      this.items.push(uppercasedValue);
      this.returnData.emit(uppercasedValue);
    }
  }

}
