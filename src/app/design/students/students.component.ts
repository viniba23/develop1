import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  constructor(private router: Router) {

  }

  epkitchendetails = new UntypedFormGroup({

    name: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    department: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    email: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    college: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    year: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
  })

}
