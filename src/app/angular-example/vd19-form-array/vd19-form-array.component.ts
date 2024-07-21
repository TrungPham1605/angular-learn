import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vd19-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vd19-form-array.component.html',
  styleUrls: ['./vd19-form-array.component.scss']
})
export class Vd19FormArrayComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(private builder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      lessons: this.builder.array([])
    });
  }

  get lessons(): UntypedFormArray {
    return this.form.get('lessons') as UntypedFormArray;
  }

  get lessonsControls(): UntypedFormGroup[] {
    return this.lessons.controls as UntypedFormGroup[];
  }

  addLesson(): void {
    const lessonForm = this.builder.group({
      title: [''],
      level: ['']
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number): void {
    this.lessons.removeAt(lessonIndex);
  }

  get valueOfLessons() {
    return this.lessons.controls.map(eachGroup => eachGroup.value);
  }
}
