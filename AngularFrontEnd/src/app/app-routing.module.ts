import { AddDeviceFormComponent } from './components/add-device-form/add-device-form.component';
import { ShowMeasurmentsResultsComponent } from './components/show-measurments-results/show-measurments-results.component';
import { EditVirtualObjectComponent } from './components/edit-virtual-object/edit-virtual-object.component';
import { AddVirtualObjectComponent } from './components/add-virtual-object/add-virtual-object.component';
import { ManageDevicesDetailComponent } from './components/manage-devices-detail/manage-devices-detail.component';
import { VirtualDevicesComponent } from './components/virtual-devices/virtual-devices.component';
import { HomeComponent } from './components/home/home.component';
import { ManageDevicesComponent } from './manage-devices/manage-devices.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVirtualDeviceFormComponent } from './components/add-virtual-device-form/add-virtual-device-form.component';
import { EditVirtualDeviceFormComponent } from './components/edit-virtual-device-form/edit-virtual-device-form.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

const routes: Routes = [
  {
    path : "virtualDevices", component: VirtualDevicesComponent
  },
  {
    path:"manageDevices", component : ManageDevicesComponent
  },
  {
    path:"manageDevices/add", component : AddDeviceComponent
  },
  {
    path : "virtualDevices/add", component: AddVirtualObjectComponent
  },
  {
    path : "virtualDevices/add/:type", component: AddVirtualDeviceFormComponent
  },
  {
    path : "virtualDevices/:macAdr/:channelNumber", component: EditVirtualObjectComponent
  },
  {
    path: 'manageDevices/:macAdr', component: ManageDevicesDetailComponent
  },
  {
    path: 'manageDevices/:macAdr/:channelNumber', component: EditVirtualObjectComponent
  },
  {
    path: 'manageDevices/:macAdr/:channelNumber/edit', component: EditVirtualDeviceFormComponent
  },
  {
    path: 'virtualDevices/:macAdr/:channelNumber/edit', component: EditVirtualDeviceFormComponent
  },
  {
    path: 'results', component: ShowMeasurmentsResultsComponent
  },
  {
    path: "", component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ManageDevicesComponent,
  HomeComponent,
  VirtualDevicesComponent,
  ManageDevicesDetailComponent,
  AddVirtualObjectComponent,
  EditVirtualObjectComponent,
  AddVirtualDeviceFormComponent,
  ShowMeasurmentsResultsComponent,
  AddDeviceComponent
]
