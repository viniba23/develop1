import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/service/app.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,private spinner : NgxSpinnerService,private toastr: ToastrService,private appService:AppService) {

  }

  students = new UntypedFormGroup({

    name: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    department: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    email: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    college: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
    year: new UntypedFormControl('', [Validators.required, Validators.nullValidator]),
  })

  public studentError = {
    name: '',
    department: '',
    email: '',
    college: '',
    year: '',
  }

  formValidation(status:String){
    this.studentError.name="";
    this.studentError.department="";
    this.studentError.email="";
    this.studentError.college="";
    this.studentError.year="";


    let hasError=false;

    if(this.students.get('name')?.invalid){
      this.studentError.name="Enter Student Name";
      hasError=true;
    }

    if(this.students.get('department')?.invalid){
      this.studentError.department="Enter Department Name";
      hasError=true;
    }

    if(this.students.get('email')?.invalid){
      this.studentError.email="Enter E-Mail Address";
      hasError=true;
    }

    if(this.students.get('college')?.invalid){
      this.studentError.college="Enter College Name";
      hasError=true;
    }

    if(this.students.get('year')?.invalid){
      this.studentError.year="Enter Education Year";
      hasError=true;
    }

    if(!hasError){
      this.saveStudentsDetails(status)
    }


  }

  ngOnInit(){
    this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
  }

  onSubmit(){
    this.formValidation("Active")
  }


  saveStudentsDetails(status : String){
    console.log("SAVE DETAILS");
    this.toastr.success("Saved successfully");
    this.router.navigate(['/dash'])
      this.appService
      .saveStudentsDetails(this.students.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("Details", data);
        // @ts-ignore
        this.customer=data;
      })
  }


}
