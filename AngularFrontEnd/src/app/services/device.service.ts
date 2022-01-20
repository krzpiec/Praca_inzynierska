import { DeviceDescriptionDto } from './../shared/models/device-dto/deviceDescriptionDto.model';
import { DeviceDto } from './../shared/models/device-dto/deviceDto.model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {


  private _deviceDtoList: DeviceDto[] = [];

  constructor(private httpClient: HttpClient) { }

  get deviceDtoList(): DeviceDto[]{
    return this._deviceDtoList;
  }

  set deviceDtoList(deviceDtoList: DeviceDto[]){
    this._deviceDtoList = deviceDtoList
  }

//todo routing to page not found if device absent


  postAddDeviceForm(deviceDescritption:DeviceDescriptionDto){
   return this.httpClient.post<any>("http://127.0.0.1:9069/device/add", deviceDescritption);
  }

  async getDeviceDetails(macAdr: String): Promise<any>{

      console.log('fetching data');
      const t = await this.httpClient.get<DeviceDto[]>('http://127.0.0.1:9069/device/get/'+macAdr).toPromise();
      return t;

  }

  fetchDeviceList(): Observable<DeviceDto[]>{
   return this.httpClient.get<DeviceDto[]>(
     'http://127.0.0.1:9069/device/getall').pipe(
      tap(response =>{
        this._deviceDtoList = response;
      })
     )

  }
}
