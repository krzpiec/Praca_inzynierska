import { Component, Input, OnInit } from '@angular/core';
import { DeviceDto } from 'src/app/shared/models/device-dto/deviceDto.model';
@Component({
  selector: 'app-device-description-list',
  templateUrl: './device-description-list.component.html',
  styleUrls: ['./device-description-list.component.scss']
})
export class DeviceDescriptionListComponent implements OnInit {

  @Input() deviceDto: DeviceDto | null;

  constructor() { }

  getData(){
    let data = [];
    data.push({header: 'Mac address', field: this.deviceDto?.deviceDescription.macAdr});
    data.push({header: 'Description', field: this.deviceDto?.deviceDescription.description});
    data.push({header: 'Friendly name', field: this.deviceDto?.deviceDescription.friendlyName});
    data.push({header: 'Create time', field: this.deviceDto?.createTime});


    return data;
  }

  ngOnInit(): void {
  }

}
