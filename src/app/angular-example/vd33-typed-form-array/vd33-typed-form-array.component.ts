import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICourseFormModel, ILessonFormModel } from './course.model';

@Component({
  selector: 'app-vd33-typed-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vd33-typed-form-array.component.html',
  styleUrls: ['./vd33-typed-form-array.component.scss']
})
export class Vd33TypedFormArrayComponent implements OnInit {
  form!: FormGroup<ICourseFormModel>;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.nonNullable.group({
      lessons: this.builder.nonNullable.array<FormGroup<ILessonFormModel>>([])
    });
  }

  get lessons(): FormArray<FormGroup<ILessonFormModel>> {
    return this.form.controls.lessons;
  }

  get lessonsControls(): FormGroup<ILessonFormModel>[] {
    return this.lessons.controls as FormGroup<ILessonFormModel>[];
  }

  addLesson() {
    const lessonForm = this.builder.nonNullable.group<ILessonFormModel>({
      title: this.builder.nonNullable.control(''),
      level: this.builder.nonNullable.control('')
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  get valueOfLessons() {
    return this.lessons.controls.map(eachGroup => eachGroup.value);
  }
}
