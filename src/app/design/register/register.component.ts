import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // isChecked1: boolean = true; 
  // isChecked2: boolean = false;
  isVisible: boolean = false  

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
    })


     public signupError= {
      firstName: '',
      lastName: '',
      email: '',
      passWord: '',
      confirmPassword: '',
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


      let hasError=false;

      if(this.signup.get('firstName')?.invalid){
        this.signupError.firstName="Enter First Name";
        hasError=true;
      }

      if(this.signup.get('lastName')?.invalid){
        this.signupError.lastName="Enter Last Name";
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
      
      if (this.signup.get('confirmPassword')?.invalid) {
        const passwordControl = this.signup.get('passWord');
        const confirmPasswordControl = this.signup.get('confirmPassword'); 
        console.log("password:");       
        if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
          confirmPasswordControl.setErrors({ passwordMismatch: true });
        }else{
          this.signupError.confirmPassword = "Password do not match";
          hasError = true;
        }
      }
        

      if(!hasError) {
        this.saveSignup(status);
    }
    }

    
  

    saveSignup(status : String){
      console.log("saved")

    }


    togglePasswordVisibility() {
      this.isVisible = !this.isVisible;
  }

}
