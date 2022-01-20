import { Result } from './../../shared/models/device-dto/Result.model';
import { GmapService } from './../../services/gmap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-measurments-results',
  templateUrl: './show-measurments-results.component.html',
  styleUrls: ['./show-measurments-results.component.scss']
})
export class ShowMeasurmentsResultsComponent implements OnInit {

  measurmentsResults: Result[];


  constructor(private gmapService: GmapService) { }

  ngOnInit(): void {
    this.measurmentsResults = this.gmapService.measurmentsResult;
  }

}
