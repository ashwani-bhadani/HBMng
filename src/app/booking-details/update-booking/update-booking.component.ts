import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  constructor(private fb: FormBuilder, private bdService: BookingDetailsService) { }

  bookingDetailsUpdateForm = this.fb.group({
    booking_id: ['', Validators.required],
    hotel_id: ['', Validators.required],
    username: ['', Validators.required],
    booked_from: ['', Validators.required],
    booked_to: ['', Validators.required],
    no_of_adults: ['', Validators.required],
    no_of_children: ['', Validators.required],
    totalAmount: ['', Validators.required]
  })

  onSubmit(){
    console.log(this.bookingDetailsUpdateForm.value);
    this.bdService.updateBookingDetails(this.bookingDetailsUpdateForm.value).subscribe(response=>{console.log('Success!',response);alert("Update Success!")},error=>console.error('Error! Try again',error));
  }


  ngOnInit(): void {
  }

}











/*   onSubmit() {
    this.bdService.updateBookingDetails(this.bookingDetailsUpdateForm.value).subscribe(response => { console.log('Success!', response); alert("Success!") }, error => console.error('Error!', error));
  } */
/* get room_no() {
  return this.bookingDetailsForm.get('roomNo') as FormArray;
}

  bookingDetailsForm2 = this.fb.group({

 booking_id: ['', Validators.required]
  })this.bookingDetailsForm2.value, 

add_room_no() {
  this.room_no.push(this.fb.control(''));
} */