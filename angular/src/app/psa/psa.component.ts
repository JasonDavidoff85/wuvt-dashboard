import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psa',
  templateUrl: './psa.component.html',
  styleUrls: ['./psa.component.css']
})
export class PsaComponent implements OnInit {

  constructor() { }

  psas: any[] = [
    {
      number: 724,
      text: "Join us for our inaugural 5K event! All proceeds will help benefit the Kiwanis Club of Wythe County's support and outreach. Registration is now open and can be accessed at runsignup.com and runroanoke.com. Search for the Kiwanis Club of Wythe County 5K. Cost is $20. T-shirts are guaranteed to the first 75 runners. If paying by check, please contact Josh Floyd, President, at jfloyd@wcc.vccs.edu or 276-613-3639. A registration form will be sent to you."
    },
    {
      number: 725,
      text: "The NRV Master Gardeners plant sale is Saturday May 7 from 9am – 2pm at the Montgomery County Government Center on Roanoke St. in Christiansburg, rain or shine. Buy perennials, annuals, shrubs, veggies, natives, fruits, & more. Want a unique rain barrel? Got it! Love yard sales? Covered! Need a hand-made potting bench? Check! Perfect for Mother’s Day gifts, plants for yourself, or to get answers on pesky garden problems. Cash & checks only. Details at www.nrvmastergardeners.com/plant-sale "
    },
    {
      number: 726,
      text: "Join #VTDITC for our 5th Annual Beat Battle & Music Production workshop hosted by Dr. J. Rawls. The area's best music producers will go head-to-head to battle for the #VTDITC Cup as well as prizes from MPCStuff & Sweetwater. After the soundclash, Dr. J. Rawls will break down the creative process he used to create one of his certified classics. Event starts at 7PM on the 21st!"
    }
  ]

  ngOnInit(): void {
  }

}
