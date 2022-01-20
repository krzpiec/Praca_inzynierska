import { Router } from '@angular/router';
import { DeviceDto } from 'src/app/shared/models/device-dto/deviceDto.model';
import { Component, Input, OnInit } from '@angular/core';
import { VirtualDeviceService } from 'src/app/services/virtual-device.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  @Input() deviceDto: DeviceDto | null;
  constructor(private virtualDeviceService: VirtualDeviceService, private router:Router) { }

  ngOnInit(): void {
  }
  fillDeviceServiceData(macAdr: String, channelNumber: number, type:String){
    this.virtualDeviceService.selectedMac = new BehaviorSubject(macAdr);
    this.virtualDeviceService.selectedChannelNumber = new BehaviorSubject(channelNumber);
    this.virtualDeviceService.selectedType = new BehaviorSubject(type);
    this.router.navigate(['/manageDevices', macAdr,channelNumber ]);
  }
}
