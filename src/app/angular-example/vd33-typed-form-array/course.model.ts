import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface ICourseFormModel {
  lessons: FormArray<FormGroup<ILessonFormModel>>;
}

export interface ILessonFormModel {
  title: FormControl<string>;
  level: FormControl<string>;
}
