import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm : FormGroup;

  constructor() { 
    this.bookForm = new FormGroup(
      {
        Name : new FormControl(),
        Author : new FormControl(),
        Price : new FormControl(),
        Publisher : new FormGroup
        ({
          PublisherName : new FormControl(),
          ContactNumber : new FormControl(),
          Location : new FormGroup(
            {
            City : new FormControl(),
            District : new FormControl(),
            State : new FormControl()
          }),
        }),
        Subscribers : new FormArray([

            new FormGroup(
              {
              SubscriberName : new FormControl(),
              SubscriberContactNumber : new FormControl(),
              PurchaseDate : new FormControl()
              }
            )

        ]

        
        )
      }
    )
  }

  AddSubscriber()
  {
    this.getSubscriber.push(new FormGroup(
      {
      SubscriberName : new FormControl(),
      SubscriberContactNumber : new FormControl(),
      PurchaseDate : new FormControl()
      }
    ) )
  }
  get getSubscriber()
  {
    return this.bookForm.get("Subscribers") as FormArray;
  }

  submitdata()
  {
    console.log(this.bookForm.value);
  }
  ngOnInit(): void {
  }

}
