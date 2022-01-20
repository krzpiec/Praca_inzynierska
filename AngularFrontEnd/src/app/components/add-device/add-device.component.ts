import { DeviceService } from './../../services/device.service';
import { DeviceDescriptionDto } from './../../shared/models/device-dto/deviceDescriptionDto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  deviceDescriptionDto:DeviceDescriptionDto = new DeviceDescriptionDto("","","");

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.deviceService.postAddDeviceForm(this.deviceDescriptionDto).subscribe(
      result=>{
        console.log(result);
      }
    )
  }

}
