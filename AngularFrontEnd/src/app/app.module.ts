import { HtppErrorInterceptor } from './services/htpp-error.interceptor';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TabMenuModule} from 'primeng/tabmenu';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { routingComponents } from './app-routing.module';
import { VirtualDevicesComponent } from './components/virtual-devices/virtual-devices.component';
import { ManageDevicesDetailComponent } from './components/manage-devices-detail/manage-devices-detail.component';
import {MenuModule} from 'primeng/menu';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { DeviceDescriptionListComponent } from './components/device-description-list/device-description-list.component';
import {TabViewModule} from 'primeng/tabview';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { FormsModule } from '@angular/forms';
import { AddVirtualObjectComponent } from './components/add-virtual-object/add-virtual-object.component';
import { EditVirtualObjectComponent } from './components/edit-virtual-object/edit-virtual-object.component';
import { AddVirtualDeviceFormComponent } from './components/add-virtual-device-form/add-virtual-device-form.component';
import { SensorFormComponent } from './components/sensor-form/sensor-form.component';
import { GMapModule } from 'primeng/gmap';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import { EditVirtualDeviceFormComponent } from './components/edit-virtual-device-form/edit-virtual-device-form.component';
import { ShowMeasurmentsResultsComponent } from './components/show-measurments-results/show-measurments-results.component';
import { MeasurmentsTableComponent } from './components/measurments-table/measurments-table.component';
import { MeasurmentsStatisticsComponent } from './components/measurments-statistics/measurments-statistics.component';
import { measurmentResultPipe } from './pipes/MeasurmentResults.pipe';
import { PaginatorModule } from 'primeng/paginator';
import { AddDeviceFormComponent } from './components/add-device-form/add-device-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
    ManageDevicesDetailComponent,
    ChannelListComponent,
    DeviceDescriptionListComponent,
    AddDeviceComponent,
    AddVirtualObjectComponent,
    EditVirtualObjectComponent,
    AddVirtualDeviceFormComponent,
    SensorFormComponent,
    EditVirtualDeviceFormComponent,
    ShowMeasurmentsResultsComponent,
    MeasurmentsTableComponent,
    MeasurmentsStatisticsComponent,
    measurmentResultPipe,
    AddDeviceFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    MDBBootstrapModule.forRoot(),
    ButtonModule,
    TableModule,
    MenuModule,
    TabViewModule,
    FormsModule,
    GMapModule,
    InputNumberModule,
    InputTextModule,
    PaginatorModule
  ],
  providers:
  [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HtppErrorInterceptor,
      multi:true
    },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
