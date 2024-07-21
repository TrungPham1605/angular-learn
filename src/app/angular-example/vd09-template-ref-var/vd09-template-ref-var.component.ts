import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vd09-template-ref-var',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vd09-template-ref-var.component.html',
  styleUrl: './vd09-template-ref-var.component.scss'
})
export class Vd09TemplateRefVarComponent {
  saveName(name: string) {
    // Task: save name ...
    alert('Saved name: ' + name);
  }

  log(name: string, value: any) {
    console.log(name, value);
  }

}
