import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isVisible = true;
  isChecked1: boolean = true; 
  isChecked2: boolean = false;

    saveType() {      
        this.isVisible = false;      
    }

    close() {
      this.isVisible=false;
    }

  

}
