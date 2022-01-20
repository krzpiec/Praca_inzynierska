
import { Component, Input, OnInit } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';
import { CalculatedData } from 'src/app/shared/models/CalculatedData.model';
import { Result } from 'src/app/shared/models/device-dto/Result.model';

@Component({
  selector: 'app-measurments-statistics',
  templateUrl: './measurments-statistics.component.html',
  styleUrls: ['./measurments-statistics.component.scss']
})
export class MeasurmentsStatisticsComponent implements OnInit {

  @Input() measurmentsResults: Result[];
  calculatedData: CalculatedData;

  constructor(private calculationService: CalculationService) { }

  async ngOnInit(): Promise<void> {
    var dataArray:number[] = [];
    this.measurmentsResults.forEach(result =>{
      dataArray.push(Number(result.reading));
    });
    this.calculatedData = await this.calculationService.postDataToCalculation(dataArray);
    console.log(this.calculatedData);
  }

  getData(){
    let data = [];
    data.push({header: 'Number of readings', field: this.measurmentsResults.length});
    data.push({header: 'Min', field: this.calculatedData?.min});
    data.push({header: 'Max', field: this.calculatedData?.max});
    data.push({header: 'Avarage', field: this.calculatedData?.avarage});
    data.push({header: 'Median', field: this.calculatedData?.median});
    data.push({header: 'Dominant', field: this.calculatedData?.domimant});
    data.push({header: 'Standard deviation', field: this.calculatedData?.standardDeviation});


    return data;
  }

}
