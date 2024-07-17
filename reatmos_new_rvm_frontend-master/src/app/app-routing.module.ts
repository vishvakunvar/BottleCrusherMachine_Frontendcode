import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ThankComponent } from './components/thank/thank.component';
import { PhoneComponent } from './components/phone/phone.component';
import { PasswordComponent } from './components/password/password.component';
import { AdminComponent } from './components/admin/admin.component';
import { WeightComponent } from './components/admin/weight/weight.component';
import { BinComponent } from './components/admin/bin/bin.component';
import { PolybagsComponent } from './components/admin/polybags/polybags.component';
import { ConveyorCrusherComponent } from './components/admin/conveyor-crusher/conveyor-crusher.component';
import { CameraComponent } from './components/admin/camera/camera.component';
import { PasswordResetComponent } from './components/admin/password-reset/password-reset.component';
import { FlapsComponent } from './components/admin/flaps/flaps.component';
import { MetalComponent } from './components/admin/metal/metal.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { BottleComponent } from './components/bottle/bottle.component';
import { FilledwinComponent } from './components/filledwin/filledwin.component';
import { BottleErrorComponent } from './components/bottle-error/bottle-error.component';
import { MachineComponent } from './components/admin/machine/machine.component';
import { MachineDataComponent } from './components/admin/machine-data/machine-data.component';


const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'thank',
    component: ThankComponent,
  },
  {
    path: 'bottle',
    component: BottleComponent
  },
  {
    path: 'phone',
    component: PhoneComponent,
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'qr-code',
    component: QrcodeComponent
  },
  {
    path: 'filled-win',
    component: FilledwinComponent
  },
  {
    path: 'bottle-error',
    component: BottleErrorComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'machine',
        component:MachineComponent,
      },
      {
        path: 'machine-data',
        component:MachineDataComponent,
      },
      {
        path: 'conveyor-crusher',
        component: ConveyorCrusherComponent,
      },
      {
        path: '',
        redirectTo: 'conveyor-crusher', pathMatch: 'full'
      },
      { 
        path: 'weight',
        component: WeightComponent,
      },
      {
        path: 'bin',
        component: BinComponent,
      
      },
      {
        path: 'polybags',
        component: PolybagsComponent,
      },
      {
        path: 'camera',
        component: CameraComponent,
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent
      },
      {
        path: 'flaps',
        component: FlapsComponent
      },
      {
        path: 'metal',
        component: MetalComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
