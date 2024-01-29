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

    this.getDetails();
  }

  adddetails(){
    this.router.navigate(['/students']);
    window.location.reload()
  }

  getDetails() {
    this.appService
      .getStudentsDetails()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log("student details::", data);
        // @ts-ignore
        this.student = data;
        // var localDetails : string [] = [];
      })
  }

  getEvent() {

    this.appService
      // .getEventList(localStorage.getItem('token'))
      // .pipe(takeUntil(this.destroy$))
      // .subscribe((data) => {
      //   console.log("EP id::", data);
      //   // @ts-ignore
      //   this.eventPlaceDetails = data;
      //   // this.filteredEventPlaceDetails = this.eventPlaceDetails;
      //   console.log("eventbookinglist::",this.eventPlaceDetails)
      //   var localUser: EventPlaceBooking [] = []
      //   for(var event of this.eventPlaceDetails){
      //     if(event.activeyn == "Yes"){
      //     localUser.push(event)
      //     this.bookingDetails = localUser
      //     }
      //   }
      //   this.filteredEventPlaceDetails = localUser.sort((a,b) => {
      //     const idA = parseInt(a.eventid.split('-')[1]);
      //     const idB = parseInt(b.eventid.split('-')[1]);

          // Compare the numeric IDs in descending order
      //     return idB - idA;
      //   })

      // })

  }

}
