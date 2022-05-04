import { Component, OnInit } from '@angular/core';
import { PSA } from '../_models/PSA';
import { PSAservice } from '../_services/psa.service';

@Component({
  selector: 'app-psa',
  templateUrl: './psa.component.html',
  styleUrls: ['./psa.component.css']
})
export class PsaComponent implements OnInit {

  constructor(
    private psaService: PSAservice
  ) { }
  psas: PSA[] = []
  curPSA = 0

  nextPSA() {
    let numPSA = this.psas.length;
    this.curPSA = (this.curPSA + 1) % numPSA
  }

  refreshPSA() {
    this.psaService.getAllPSAs()
    .subscribe(
      (psas) => {
        this.psas = psas
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.refreshPSA();
  }

}
