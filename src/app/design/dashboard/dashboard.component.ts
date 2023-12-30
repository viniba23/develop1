import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject, takeUntil } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { Students } from '../model/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  destroy$: Subject<boolean> = new Subject<boolean>();
  student: Students[]=[];
  getStudents: string | undefined;

  constructor(private router: Router,private spinner : NgxSpinnerService,private appService: AppService) {

  }
  
  ngOnInit(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.getEventPlaceByuserId();
  }

  adddetails(){
    this.router.navigate(['/students']);
  }

  getEventPlaceByuserId() {
    this.appService
      .getStudentsDetails()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("Event place Dropdwon::", data);
        // @ts-ignore
        this.student = data;
        // var localDetails : string [] = [];
      })
  }

}
