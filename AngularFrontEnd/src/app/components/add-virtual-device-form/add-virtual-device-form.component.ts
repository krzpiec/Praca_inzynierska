import { VirtualSensorInitDto } from './../../shared/models/device-dto/VirtualSensorInitDto.model';
import { VirtualDeviceService } from './../../services/virtual-device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-virtual-device-form',
  templateUrl: './add-virtual-device-form.component.html',
  styleUrls: ['./add-virtual-device-form.component.scss']
})
export class AddVirtualDeviceFormComponent implements OnInit {

  virtualSensorInitDto:VirtualSensorInitDto = new VirtualSensorInitDto("", 0, "" , "", 0, 0);
  type: String;

  constructor(private route: ActivatedRoute, private virtualDeviceService: VirtualDeviceService) { }

  ngOnInit(): void {
    let typeFromRoute = this.route.snapshot.paramMap.get('type')!;
    this.type = typeFromRoute;
    this.virtualDeviceService.selectedMac.subscribe( mac=>{
      this.virtualSensorInitDto.macAdr = mac;
    })
    this.virtualDeviceService.selectedChannelNumber.subscribe(channel=>{
      this.virtualSensorInitDto.channelNumber = channel;
    })
  }

  onSubmit(){
   this.virtualDeviceService.postVirtualSensorInitDto(this.virtualSensorInitDto).subscribe(response =>{
     console.log(response);
   })
  }

}
