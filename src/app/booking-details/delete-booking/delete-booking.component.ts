import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  booking_id:number=0;

  constructor(private bdService:BookingDetailsService) { }

   deleteBookingDetailsById(){
    console.log(this.booking_id)
    this.bdService.deleteBookingDetailsById(this.booking_id).subscribe(
      data=> {
        console.log("Response recieved");
      },
      error=> {
        console.log("exception occured");
      }
    )
  }

  ngOnInit(): void {
    
  }

}

  
 /*  bookingDetailsForm =this.fb.group({
    booking_id:['',Validators.required]
  }); */

  /* onSubmit(){
    , private activatedRoute:ActivatedRoute
    private fb:FormBuilder,

    let response= this.bdService.deleteBookingDetailsById(this.bookingDetailsForm.value)
    console.log(response);
    response.subscribe();
    
   } */

    /* alert("deletion in progress !");
    this.activatedRoute.params.subscribe(data=>this.booking_id=data.booking_id);
    console.log(this.booking_id);
    let response= this.bdService.deleteBookingDetailsById(this.booking_id)
    console.log(response);
    response.subscribe();
    alert("deletion - success!");
     this.router.navigateByUrl("/fetchAllBookingDetails")};
     response.subscribe(data=>alert(data),error=>alert(error.error));
    let id=document.getElementById("booking_id"); */