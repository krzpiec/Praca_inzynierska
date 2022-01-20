import { Result } from './../shared/models/device-dto/Result.model';
import { HttpClient } from '@angular/common/http';
import { RectangleDto } from './../shared/models/device-dto/RectangleDto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GmapService {

  // covers Y axis
  yFrom: number;
  yTo: number ;
  xTo: number ;
  xFrom: number;


  measurmentsResult: Result[];

  constructor(private httpClient: HttpClient) { }


  postRectangleDto(rectangleDto: RectangleDto){

    return this.httpClient.post<any>("http://127.0.0.1:9069/rtree/search", rectangleDto)


  }
}
