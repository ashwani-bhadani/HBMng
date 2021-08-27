import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  booking_id:number=0;

  constructor(private activatedRoute:ActivatedRoute) { }

  getBookingId():number{
    return this.booking_id;
  }

  setBookingId(booking_id:number){
    this.booking_id=booking_id;
  }
/* 
  onSubmit(){
    //console.log(this.registrationForm.value);
    this.bdService.updateHotel(this.registrationForm.value).subscribe(response=>{console.log('Success!',response);alert("Success!")},error=>console.error('Error!',error));
  } */

  ngOnInit(): void {
  }

}
