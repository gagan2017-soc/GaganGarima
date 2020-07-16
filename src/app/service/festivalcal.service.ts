import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { festivalcal } from '../models/festivalcal';

@Injectable({ providedIn: 'root' })
export class FestivalcalService {
  constructor(private http: HttpClient) { }

  createfestival(festivalcal: festivalcal) {
      return this.http.post(`auth/createFestival`, festivalcal);
  }

  updatefestival(transcatifestivalcalon: festivalcal) {
    return this.http.post(`auth/updateFestival`, festivalcal);
}


  getAll(){
    return this.http.get(`auth/getAllFestival`);
}

}