import { DeviceService } from './../../services/device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDto } from 'src/app/shared/models/device-dto/deviceDto.model';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-manage-devices-detail',
  templateUrl: './manage-devices-detail.component.html',
  styleUrls: ['./manage-devices-detail.component.scss']
})
export class ManageDevicesDetailComponent implements OnInit {

  public selectedMac : string;
  public deviceDto: DeviceDto | null;

  public showChannelListComponent: boolean = false;
  public showDescriptionComponent:boolean = true;
  public showEditComponent: boolean = false;


  items: MenuItem[];


  constructor(private route: ActivatedRoute, private deviceService: DeviceService) { }

  async ngOnInit(): Promise<void> {

    this.initItems();


    let mac = this.route.snapshot.paramMap.get('macAdr');
    this.selectedMac = mac || "";

    if(!this.deviceDto){
      this.deviceDto = await this.deviceService.getDeviceDetails(this.selectedMac);
    }
  }



  private initItems(){
    this.items = [
      {label: 'Description', icon: 'pi pi-fw pi-plus',
      command: () => {
        this.showDescriptionOnClick();
      }}
      ,
      {label: 'Channels', icon: 'pi pi-fw pi-download',
      command: () => {
        this.showChannelListOnClick();}
      }
  ];
  }


  private showDescriptionOnClick(){
    this.showDescriptionComponent = !this.showDescriptionComponent;
    if(this.showDescriptionComponent){
      this.showChannelListComponent = false;
      this.showEditComponent = false;
    }
  }
  private showChannelListOnClick(){
    this.showChannelListComponent = !this.showChannelListComponent;
    if(this.showChannelListComponent){
      this.showDescriptionComponent = false;
      this.showEditComponent = false;
    }
  }
}
