import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BottleComponent } from './components/bottle/bottle.component';
import { FilledwinComponent } from './components/filledwin/filledwin.component';
import { PasswordComponent } from './components/password/password.component';
import { PhoneComponent } from './components/phone/phone.component';
import { ThankComponent } from './components/thank/thank.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { AdminComponent } from './components/admin/admin.component';
import { WeightComponent } from './components/admin/weight/weight.component';
import { BinComponent } from './components/admin/bin/bin.component';
import { CameraComponent } from './components/admin/camera/camera.component';
import { PolybagsComponent } from './components/admin/polybags/polybags.component';
import { ConveyorCrusherComponent } from './components/admin/conveyor-crusher/conveyor-crusher.component';
import { PasswordResetComponent } from './components/admin/password-reset/password-reset.component';
import { FlapsComponent } from './components/admin/flaps/flaps.component';
import { MetalComponent } from './components/admin/metal/metal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottleErrorComponent } from './components/bottle-error/bottle-error.component';
import { MachineDataComponent } from './components/admin/machine-data/machine-data.component';
import { MachineComponent } from './components/admin/machine/machine.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BottleComponent,
    FilledwinComponent,
    PasswordComponent,
    PhoneComponent,
    ThankComponent,
    QrcodeComponent,
    AdminComponent,
    WeightComponent,
    BinComponent,
    CameraComponent,
    PolybagsComponent,
    ConveyorCrusherComponent,
    PasswordResetComponent,
    FlapsComponent,
    MetalComponent,
    BottleErrorComponent,
    MachineDataComponent,
    MachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QRCodeModule,
    ToastrModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
