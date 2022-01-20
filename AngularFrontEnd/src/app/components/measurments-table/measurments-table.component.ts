import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/models/device-dto/Result.model';

@Component({
  selector: 'app-measurments-table',
  templateUrl: './measurments-table.component.html',
  styleUrls: ['./measurments-table.component.scss']
})
export class MeasurmentsTableComponent implements OnInit {

  @Input() measurmentsResults: Result[];
  constructor() { }

  ngOnInit(): void {
  }

}
