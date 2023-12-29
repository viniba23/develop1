import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from "@angular/common/http";
import { Login } from '../design/model/login';
import { UntypedFormGroup } from '@angular/forms';
import { Students } from '../design/model/student';
import { Register } from '../design/model/register';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  endpoint = "http://localhost:8084";
  constructor(private router: Router, private toastr: ToastrService,private http: HttpClient) { }


  // getLogin(MailId: string,Password : string){
  //   return this.http.post<Login>(
  //     this.endpoint +"/User/getLogin/" + MailId+ "/" + Password,
  //   );
  // }
  getLogin(userForm : UntypedFormGroup){
    return this.http.post<Login>(
      this.endpoint +"/api/login/add" , userForm
    )
  }

  saveStudentsDetails(userForm : UntypedFormGroup){
    return this.http.post<Students>(
      this.endpoint +"/api/studentsDetails/add" , userForm
    )
  }

  saveRegisterDetails(userForm : UntypedFormGroup){
    return this.http.post<Register>(
      this.endpoint +"/api/register/add" , userForm
    )
  }
}