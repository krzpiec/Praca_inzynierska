import { EditVirtualObjectDto } from './../shared/models/device-dto/EditVirtualObjectDto.model';
import { VirtualSensorInitDto } from './../shared/models/device-dto/VirtualSensorInitDto.model';
import { VirtualObjectInitDto } from './../shared/models/device-dto/VirtualObjectInitDto.model';
import { VirtualObjectDto } from './../shared/models/device-dto/VirtualObjectDto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VirtualDeviceService {

  selectedMac: BehaviorSubject<String>;
  selectedChannelNumber: BehaviorSubject<number>;
  selectedType: BehaviorSubject<String>
  _virtualObjectList: VirtualObjectDto[];

  constructor(private httpClient: HttpClient) { }

  async getVirtualObjectDetails(macAdr: String, channelNumber:number): Promise<any>{

    const t = await this.httpClient.get<VirtualObjectDto[]>('http://127.0.0.1:9069/virtualDevices/get/'+macAdr+"/"+channelNumber).toPromise();
    return t;

}

async fetchAllVirtualDevices(){
  return await this.httpClient.get<VirtualObjectDto[]>("http://127.0.0.1:9069/virtualDevices/getall").toPromise();
}


  postVirtualObjectInitDto(virtualObjectInitDto: VirtualObjectInitDto){
    return this.httpClient.post<any>("http://127.0.0.1:9069/virtualDevices/add", virtualObjectInitDto);
  }

  postVirtualSensorInitDto(virtualSensorInitDto: VirtualSensorInitDto){
    return this.httpClient.post<any>("http://127.0.0.1:9069/virtualDevices/add/Sensor", virtualSensorInitDto);
  }

  postEditedVirtualObjectDto(virtualObjectDto: VirtualObjectDto){
    console.log(virtualObjectDto);
    let editvodto = new EditVirtualObjectDto(
      virtualObjectDto.mac,
      virtualObjectDto.channelNumber,
      virtualObjectDto.localizationDto.description,
      virtualObjectDto.description,
      virtualObjectDto.localizationDto.latitude,
      virtualObjectDto.localizationDto.longitude);

    return this.httpClient.post<EditVirtualObjectDto>("http://127.0.0.1:9069/virtualDevices/edit", editvodto);
  }


}
