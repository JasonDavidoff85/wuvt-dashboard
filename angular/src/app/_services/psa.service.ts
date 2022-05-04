import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PSA } from '../_models/PSA';

@Injectable({ providedIn: 'root' })
export class PSAservice {
  constructor(private http: HttpClient) { }

  getAllPSAs() {
      return this.http.get<PSA[]>(`http://localhost:3030/psa/getpsas`);
  }

  addPSA(psa: PSA) {
    return this.http.post(`http://localhost:3030/psa/addpsa`, psa);
}




}