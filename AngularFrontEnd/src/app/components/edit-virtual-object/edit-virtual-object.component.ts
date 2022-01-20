import { BehaviorSubject } from 'rxjs';
import { VirtualDeviceService } from './../../services/virtual-device.service';
import { VirtualObjectDto } from './../../shared/models/device-dto/VirtualObjectDto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-virtual-object',
  templateUrl: './edit-virtual-object.component.html',
  styleUrls: ['./edit-virtual-object.component.scss']
})
export class EditVirtualObjectComponent implements OnInit {


  editableHeaders = ['Latitude', 'Longitude', 'Description', 'Localization description'];

  noneditableHeaders = ['Mac address','Channel number', 'DesiredType' ];

  objectPresent: boolean = true;

  virtualObjectDto:VirtualObjectDto;

  constructor(private route: ActivatedRoute, private virtualDeviceService: VirtualDeviceService) { }

  async ngOnInit(): Promise<void> {
    let mac = this.route.snapshot.paramMap.get('macAdr');
    let channelNumber = this.route.snapshot.paramMap.get('channelNumber');
    let selectedMac = mac || "";
    let selectedChannelNumber:number = Number(channelNumber);
    this.virtualObjectDto = await this.virtualDeviceService.getVirtualObjectDetails(selectedMac, selectedChannelNumber);
    if(!this.virtualObjectDto)
      this.objectPresent = false;
  }


  getData(){


    let data = [];
    data.push({header: 'Mac address', field: this.virtualObjectDto.mac});
    data.push({header: 'Channel number', field: this.virtualObjectDto.channelNumber});
    data.push({header: 'Description', field: this.virtualObjectDto.description});
    data.push({header: 'DesiredType', field: this.virtualObjectDto.desiredType});
    data.push({header: 'Longitude', field: this.virtualObjectDto.localizationDto.longitude});
    data.push({header: 'Latitude', field: this.virtualObjectDto.localizationDto.latitude});
    data.push({header: 'Localization description', field: this.virtualObjectDto.localizationDto.description});
    return data;
  }


}
