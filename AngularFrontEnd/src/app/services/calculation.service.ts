import { CalculationData } from './../shared/models/calculationData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalculatedData } from '../shared/models/CalculatedData.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }


  async postDataToCalculation(data: number[]):Promise<CalculatedData> {
    let calculationData : CalculationData = new CalculationData(data);
    console.log(calculationData);
    return await this.http.post<any>("http://127.0.0.1:9069/results/statistics", calculationData).toPromise();
  }

}
