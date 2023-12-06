import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private router: Router) {

  }
  login = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.nullValidator]),
    password: new FormControl('',[Validators.required, Validators.nullValidator]),

  })
  register(){
    this.router.navigate(['/register'])
  }

  dashboard(){
    this.router.navigate(['/dash'])
  }

}
