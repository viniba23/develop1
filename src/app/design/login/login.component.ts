import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/service/app.service';
import { Login } from '../model/login';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  fieldTextType: boolean =false;
  isPasswordVisible: boolean =false  
  currentDetails: Login[]=[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,private toastr:ToastrService,private spinner : NgxSpinnerService,private appService: AppService) {

  }
  login = new UntypedFormGroup({
    userName: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),
    passWord: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),
  })

  public loginError ={
        userName: '',
        passWord: '',
  }
 
  ngOnInit(){
  
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


  saveLogin(status : String){
    console.log("SAVE DETAILS");
    this.toastr.success("Saved successfully");
    this.router.navigate(['/dash'])
      this.appService
      .saveLoginDetails(this.login.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("Details", data);
        // @ts-ignore
        // this.customer=data;
      })

    
  }

  register(){
    this.router.navigate(['/register'])
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
}

}
