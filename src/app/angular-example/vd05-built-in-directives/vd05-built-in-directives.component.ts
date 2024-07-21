import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vd05-built-in-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vd05-built-in-directives.component.html',
  styleUrl: './vd05-built-in-directives.component.scss'
})
export class Vd05BuiltInDirectivesComponent {
  canShow = true;

  listPage = ['A', 'B', 'C'];

  inputValue!: string;

  inputText = '';

  myContext = { $implicit: 'World', localVie: 'Bạn' };

  get shouldShow(): boolean {
    return this.inputText.trim() !== '';
  }

  toggleShow(): void {
    this.canShow = !this.canShow;
  }
}
