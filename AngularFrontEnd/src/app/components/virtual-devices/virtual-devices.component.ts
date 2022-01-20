import { VirtualDeviceService } from './../../services/virtual-device.service';
import { VirtualObjectDto } from './../../shared/models/device-dto/VirtualObjectDto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-devices',
  templateUrl: './virtual-devices.component.html',
  styleUrls: ['./virtual-devices.component.scss']
})
export class VirtualDevicesComponent implements OnInit {

  virtualObjectList: VirtualObjectDto[];

  constructor(private virtualDeviceService: VirtualDeviceService) { }

  async ngOnInit(): Promise<void> {


      this.virtualObjectList = await this.virtualDeviceService.fetchAllVirtualDevices();
  }

}
