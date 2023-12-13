import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './design/login/login.component';
import { StudentsComponent } from './design/students/students.component';
import { DashboardComponent } from './design/dashboard/dashboard.component';
import {RegisterComponent} from './design/register/register.component';
import { TableCheckingComponent } from './design/table-checking/table-checking.component';
const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'students',
  component: StudentsComponent
},
{
  path: 'dash',
  component: DashboardComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'table',
  component: TableCheckingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
