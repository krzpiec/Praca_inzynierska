import { VirtualObjectDto } from './../../shared/models/device-dto/VirtualObjectDto.model';
import { VirtualDeviceService } from './../../services/virtual-device.service';
import { RectangleDto } from './../../shared/models/device-dto/RectangleDto.model';
import { Router } from '@angular/router';
import { GmapService } from './../../services/gmap.service';
import { Component, OnInit } from '@angular/core';
import {GMap} from 'primeng/gmap';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: any;

  overlays: any[];

  rectangleDto:RectangleDto;

  virtualDevicesDto: VirtualObjectDto[] = [];

  mapCenter =  {lat: 50.88, lng: 20.64};

  bounds = {
    north: 52.24806411711,
    south: 49.92978219795803,
    east: 22.116227569885258,
    west: 18.613212433166492,
  };

  boundsListener=  new BehaviorSubject(this.bounds);

  leftCornerX: number = this.mapCenter.lng;
  leftCornerY: number = this.mapCenter.lat;
  rightCornerX: number = this.mapCenter.lng;
  rightCornerY: number= this.mapCenter.lat;


  rectangle = new google.maps.Rectangle({
    strokeColor: "#000000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#8F8F8F",
    fillOpacity: 0.35,
    bounds: this.bounds,
    editable: true,
    draggable: true
    });


  constructor(private gmapService:GmapService, private router:Router, private virtualDeviceService: VirtualDeviceService) { }

  async ngOnInit(): Promise<void> {

    this.options = {
      center: this.mapCenter,
      zoom: 7
  };


  this.virtualDevicesDto = await this.virtualDeviceService.fetchAllVirtualDevices();

  google.maps.event.addListener(this.rectangle, 'bounds_changed',  () => {
   this.bounds.north = this.rectangle.getBounds()!.getNorthEast().lat();
   this.bounds.east = this.rectangle.getBounds()!.getNorthEast().lng();
   this.bounds.south = this.rectangle.getBounds()!.getSouthWest().lat();
   this.bounds.west = this.rectangle.getBounds()!.getSouthWest().lng();
});

  this.overlays = [
    this.rectangle
   ];
   var counter = 0;
   this.virtualDevicesDto.forEach(vo => {


     this.overlays.push(
      new google.maps.Marker({position: {lat: vo.localizationDto.longitude, lng: vo.localizationDto.latitude}, title:counter.toString()}),
     )
     counter++;
   });

  }



  onRectangleShow(lcx:number, lcy:number, rcx:number,rcy:number){
    this.bounds.north = lcy;
    this.bounds.south = rcy;
    this.bounds.west = lcx;
    this.bounds.east = rcx;

    this.rectangle.setBounds(this.bounds);
  }

  onRectangleSubmit(){
    this.rectangleDto = new RectangleDto("searchRectangle",
    this.bounds.west,
    this.bounds.south,
    this.bounds.east,
    this.bounds.north
    );

    this.gmapService.postRectangleDto(this.rectangleDto).subscribe(response =>{
      console.log(response);
     if(response){
       var stringJson: any;
       stringJson = JSON.stringify(response.list);
       this.gmapService.measurmentsResult = JSON.parse(stringJson);
       this.router.navigate(["results"]);
     }

  });
}
}
