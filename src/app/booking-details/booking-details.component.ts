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

  ngOnInit(): void {
  }

}
