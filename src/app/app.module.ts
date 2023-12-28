import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './design/login/login.component';
import { StudentsComponent } from './design/students/students.component';
import { DashboardComponent } from './design/dashboard/dashboard.component';
import { RegisterComponent } from './design/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TableCheckingComponent} from './design/table-checking/table-checking.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    DashboardComponent,
    RegisterComponent,
    TableCheckingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
    }), 
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
