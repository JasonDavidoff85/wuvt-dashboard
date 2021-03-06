import { Component, OnInit } from '@angular/core';
import { PSAservice } from '../_services/psa.service';
import { PSA } from '../_models/PSA';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-add-psa',
  templateUrl: './add-psa.component.html',
  styleUrls: ['./add-psa.component.css']
})
export class AddPSAComponent implements OnInit {

  constructor(
    private PsaService: PSAservice,
    private notificationService: NotificationService
  ) { }

  submitPSA(text: string, number: string) {
    // console.log(text, parseInt(number));
    this.PsaService.addPSA({text: text, number: parseInt(number), isActive: true})
    .subscribe(
      (success) => {
        this.notificationService.showNotif("Submitted!", "Success")
      },
      (error) => {
        this.notificationService.showNotif(error, "Error")
      }
    )
  }


  inactivePsa(num: string) {
    this.PsaService.markInactive(parseInt(num))
    .subscribe(
      (success) => {
        this.notificationService.showNotif("1 PSA updated", "Success")
      },
      (error) => {
        this.notificationService.showNotif(error, "Error")
      }
    )
  }

  ngOnInit(): void {
  }

}
