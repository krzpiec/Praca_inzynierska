import { VirtualDeviceService } from './../../services/virtual-device.service';
import { VirtualObjectDto } from './../../shared/models/device-dto/VirtualObjectDto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-virtual-device-form',
  templateUrl: './edit-virtual-device-form.component.html',
  styleUrls: ['./edit-virtual-device-form.component.scss']
})
export class EditVirtualDeviceFormComponent implements OnInit {

  virtualObjectDto:VirtualObjectDto ;

  constructor(private virtualDeviceService: VirtualDeviceService, private route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    let mac = this.route.snapshot.paramMap.get('macAdr')!;
    let channelNumber = this.route.snapshot.paramMap.get('channelNumber');
    let selectedChannelNumber:number = Number(channelNumber);
    this.virtualObjectDto = await this.virtualDeviceService.getVirtualObjectDetails(mac, selectedChannelNumber);
  }

  onSubmit(){
    this.virtualDeviceService.postEditedVirtualObjectDto(this.virtualObjectDto).subscribe(response =>{
      console.log(response);
    });
  }

}
