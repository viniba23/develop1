import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './design/login/login.component';
import { StudentsComponent } from './design/students/students.component';
import { DashboardComponent } from './design/dashboard/dashboard.component';
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
