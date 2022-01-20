import { VirtualDeviceService } from './../services/virtual-device.service';
import { DeviceDto } from './../shared/models/device-dto/deviceDto.model';
import { DeviceDescriptionDto } from './../shared/models/device-dto/deviceDescriptionDto.model';
import { DeviceService } from './../services/device.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.scss'],

})
export class ManageDevicesComponent implements OnInit {

  deviceDtoList: DeviceDto[] = [];
  columns: any[];
  deviceDto: DeviceDto;

  constructor(private deviceService: DeviceService, private virtualDeviceService: VirtualDeviceService) { }

  @ViewChild('dt') table: Table;//?

  ngOnInit(): void {
    if(!this.deviceDtoList?.length)
    {
        this.deviceService.fetchDeviceList().subscribe(() =>{
        this.deviceDtoList = this.deviceService.deviceDtoList;

       });
    }
//toodo poprawic columny
   this.columns = [
     {field: 'macAdr', header: 'MAC'},
     {field: 'friendlyName', header: 'Friendly name'},
     {field: 'channels', header: 'added channels'},
     {field: 'createTime', header: 'CreateTime'},
     {field: 'settings', header: ''}
   ]


}


}
