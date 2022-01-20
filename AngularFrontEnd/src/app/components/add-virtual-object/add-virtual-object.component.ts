import { VirtualDeviceService } from './../../services/virtual-device.service';
import { VirtualObjectInitDto } from './../../shared/models/device-dto/VirtualObjectInitDto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChannelDto } from 'src/app/shared/models/device-dto/channelDto.model';
@Component({
  selector: 'app-add-virtual-object',
  templateUrl: './add-virtual-object.component.html',
  styleUrls: ['./add-virtual-object.component.scss']
})
export class AddVirtualObjectComponent implements OnInit {

  virtualObjectInitDto: VirtualObjectInitDto = new VirtualObjectInitDto("",-1,"");

  types = [
    'Sensor',
    'BO'
  ]

  constructor(private virtualDeviceService: VirtualDeviceService, private router : Router) { }

  ngOnInit(): void {
    this.virtualDeviceService.selectedMac.subscribe(response =>{
      if(response)
      this.virtualObjectInitDto.macAdr = response;
    });

    this.virtualDeviceService.selectedChannelNumber.subscribe(response =>{
      if(response)
      this.virtualObjectInitDto.channelNumber = response;
    });

    this.virtualDeviceService.selectedType.subscribe(response =>{
      this.virtualObjectInitDto.type = response.toUpperCase();
    });
  }


  onSubmit(){
    this.virtualDeviceService.postVirtualObjectInitDto(this.virtualObjectInitDto).subscribe(
      result=>{
        this.virtualDeviceService.selectedMac = new BehaviorSubject(this.virtualObjectInitDto.macAdr);
        this.virtualDeviceService.selectedChannelNumber = new BehaviorSubject(this.virtualObjectInitDto.channelNumber);
        this.router.navigate(["virtualDevices/add/", this.virtualObjectInitDto.type]);
      }
    );
  }

}
