import { Component, OnInit } from '@angular/core';
import { SubscribeService } from '../subscribe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {

  userId : any;
  checkbox : number = 1;
  planId :number;

  constructor(
    private subscriptionService: SubscribeService, private router : Router) {}

  ngOnInit(): void {

    //to get data from local storage 
    this.userId = localStorage.getItem('userId');

    this.subscriptionService.getAll().subscribe(data=>{
      console.log(data);
    }
    );
  }
 //method to get value from radiobox
changeCheckbox(value: any){
  this.planId = value;
  console.log(" Your Subcription Value Plan is : ", value );
}


//for subscription 
subscribe(id:number){
  // DoSubscribe(customerId:number, planId:number){
  //   return this.httpClient.post(`${this.apiServer}/${customerId}`,planId);
  //     }
  
  console.log(this.userId,this.planId);
    this.subscriptionService.DoSubscribe(this.userId,this.planId).subscribe(data=>{
    alert(" Your Selected Subscription Plan : " + this.planId);

    // this.router.navigate(['/home']); 
  }
  );
  }
}
