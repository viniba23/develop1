import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/service/app.service';
import { Login } from '../model/login';
import { Subject, takeUntil } from 'rxjs';
import { Register } from '../model/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  fieldTextType: boolean =false;
  isPasswordVisible: boolean =false  
  destroy$: Subject<boolean> = new Subject<boolean>();
  customer : Register[]=[]; 

  constructor(private router: Router,private toastr:ToastrService,private spinner : NgxSpinnerService,private appService: AppService) {

  }
  login = new UntypedFormGroup({
    userName: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),
    confirmPassword: new UntypedFormControl('',[Validators.required, Validators.nullValidator]),
  })

  public loginError ={
        userName: '',
        confirmPassword: '',
  }
 
  ngOnInit(){
  
  }

  onSubmit(){
      this.formValidation("Active");
  }
   
  formValidation(status:String){
        this.loginError.userName="";
        this.loginError.confirmPassword="";

        let hasError = false;

        if(this.login.get('userName')?.invalid){
          this.loginError.userName= "Enter the UserName";
          hasError = true;
        }

        if(this.login.get('confirmPassword')?.invalid){
            this.loginError.confirmPassword= "Enter the Valid Password";
            hasError = true;
        }


        if(!hasError) {
            this.saveuserLogin();
        }
  }


  saveLogin() {
    console.log("SAVE DETAILS");
    const userName = this.login.get("userName")?.value;
    const confirmPassword = this.login.get("confirmPassword")?.value;
        this.appService
        .getLoginId(userName, confirmPassword)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          console.log("Details", data);
          // @ts-ignore
          this.customer = data;
          for(let login of this.customer){
            if (login.userName[0] != null && login.confirmPassword[0] !=null ) {
              this.router.navigate(['/dash'])
              this.toastr.success("Login successfully")              
            }
             else {
              this.toastr.error("Login Credentisls is incorrect")
              this.login.reset();
              console.log("kjkjk")
            }
          }
        }
        ,(err: any) =>{
        },() => console.log("HTTP request completed"));
  }

  saveuserLogin() {
    const userName = this.login.get("userName")?.value;
    const confirmPassword = this.login.get("confirmPassword")?.value;
  
    this.appService
      .getLoginId(userName, confirmPassword)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data) => {
          console.log("Details", data);
          // @ts-ignore
          this.customer = data;  
          if (this.customer && this.customer.length > 0) {
            this.router.navigate(['/dash']);
            this.toastr.success("Login successful");
          } else {
            this.toastr.error("Login Credentials are incorrect");
            this.login.reset();
            console.log("Incorrect credentials");
          }
        },
        (err: any) => {
        },
        () => console.log("HTTP request completed")
      );
  }
  
  

  register(){
    this.router.navigate(['/register'])
  }
  
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
}

// getLogin(){
//   this.appService.getLoginId(this.login.get('userName').value,this.login.get('passWord').value)
//   pipe(takeUntil(this.destroy$))
//       .subscribe((data) => {
//         this.spinner.hide()
//         console.log("Test data::", data);
//         // @ts-ignore
//         this.loginDetails = data;
// }

}
