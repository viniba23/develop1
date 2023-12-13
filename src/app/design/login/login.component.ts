import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  fieldTextType: boolean =false;
  isPasswordVisible: boolean =false  

  constructor(private router: Router) {

  }
  login = new UntypedFormGroup({
    userName: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),
    passWord: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),

  })

  public loginError ={
        userName: '',
        passWord: '',
  }


  onSubmit(){
      this.formValidation("Active");
  }
   
  formValidation(status:String){
        this.loginError.userName="";
        this.loginError.passWord="";

        let hasError = false;

        if(this.login.get('userName')?.invalid){
          this.loginError.userName= "Enter the UserName";
          hasError = true;
        }

        if(this.login.get('passWord')?.invalid){
            this.loginError.passWord= "Enter the Valid Password";
            hasError = true;
        }


        if(!hasError) {
            this.saveLogin(status);
        }
  }


  saveLogin(status : String){}

  register(){
    this.router.navigate(['/register'])
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
}

}
