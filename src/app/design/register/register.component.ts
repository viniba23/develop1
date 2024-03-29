import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { Register } from '../model/register';
import Swal from "sweetalert2";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  getEPUserDetails: Register[]=[];
  getEmailId : string [] = [];
  constructor ( private toastr: ToastrService,private spinner : NgxSpinnerService,private router:Router,
    private appService : AppService){
  
           }

  // isChecked1: boolean = true; 
  // isChecked2: boolean = false;
  isVisible: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

    // /saveType() {      
    //     this.isVisible = false;      
    // }

    // close() {
    //   this.isVisible=false;
    // }

    signup = new UntypedFormGroup({
        firstName : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
        lastName : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
        email : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
        passWord : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
        confirmPassword : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
        userName : new UntypedFormControl('',[Validators.required,Validators.nullValidator]),
    })


     public signupError= {
        firstName: '',
        lastName: '',
        email: '',
        passWord: '',
        confirmPassword: '',
        userName: '',
    }


    ngOnInit(){
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);

      this.getEPUser();
    
    }

    onSubmit(){
      this.formValidation("Active");
    }

    formValidation(status:String){
      this.signupError.firstName="";
      this.signupError.lastName="";
      this.signupError.email="";
      this.signupError.passWord="";
      this.signupError.confirmPassword="";
      this.signupError.userName="";


      let hasError=false;

      if(this.signup.get('firstName')?.invalid){
        this.signupError.firstName="Enter First Name";
        hasError=true;
      }

      if(this.signup.get('lastName')?.invalid){
        this.signupError.lastName="Enter Last Name";
        hasError=true;
      }

      if(this.signup.get('userName')?.invalid){
        this.signupError.userName="Enter User Name";
        hasError=true;
      }

      if(this.signup.get('email')?.invalid){
        this.signupError.email="Enter E-Mail Address";
        hasError=true;
      }

      if(this.signup.get('passWord')?.invalid){
        this.signupError.passWord="Enter new Password";
        hasError=true;
      }
      

      const passwordControl = this.signup.get('passWord');
      const confirmPasswordControl = this.signup.get('confirmPassword');
      if (passwordControl && confirmPasswordControl) {
        if (passwordControl.value !== confirmPasswordControl.value) {
          confirmPasswordControl.setErrors({ 'passwordMismatch': true });
          this.signupError.confirmPassword = "Passwords do not match";
          hasError = true;
        }
      }
        
      if(!hasError) {
        this.saveSignup();
        }
    }

    
  

    saveSignup(){
        this.spinner.show()
      console.log("saved");
      // this.spinner.show();
      this.spinner.show();
      this.router.navigate(['/'])
      console.log("SAVE DETAILS");
      this.toastr.success("Saved successfully");
      this.router.navigate([''])
      this.appService
      .saveRegisterDetails(this.signup.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("Details", data);
        // @ts-ignore
        this.customer=data;
        this.errorAlert();
      })
    }

    

    togglePasswordVisibility() {
      this.isVisible = !this.isVisible;     
  }


  getEPUser(){
    this.appService.getUserRegDetails()
    .pipe(takeUntil(this.destroy$))
    .subscribe((data) => {
      console.log("UserDetails::",data)
      //@ts-ignore
      this.getEPUserDetails = data
    },(err: any) =>{
    },() => console.log("HTTP request completed"))
  }

  errorAlert() {
    Swal.fire({
      title: "Something Went Wrong",
      icon: "error",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
      showClass: {
        popup: "animate_animated animate_fadeInDown",
      },
      hideClass: {
        popup: "animate_animated animate_fadeOutUp",
      },
    }).then((result) =>{
      if(result.isConfirmed) {
        window.location.reload()
      }
    });
  }

}
