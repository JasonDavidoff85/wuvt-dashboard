import { Component, OnInit } from '@angular/core';
import { PSAservice } from '../_services/psa.service';
import { PSA } from '../_models/PSA';

@Component({
  selector: 'app-add-psa',
  templateUrl: './add-psa.component.html',
  styleUrls: ['./add-psa.component.css']
})
export class AddPSAComponent implements OnInit {

  constructor(
    private PsaService: PSAservice
  ) { }

  submitPSA(text: string, number: string) {
    // console.log(text, parseInt(number));
    this.PsaService.addPSA({text: text, number: parseInt(number), isActive: true})
    .subscribe(
      (success) => {
        console.log("success")
      }
    )
  }

  ngOnInit(): void {
  }

}
