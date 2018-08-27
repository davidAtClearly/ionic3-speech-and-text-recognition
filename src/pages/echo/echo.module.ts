import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EchoPage } from './echo';

@NgModule({
  declarations: [
    EchoPage,
  ],
  imports: [
    IonicPageModule.forChild(EchoPage),
  ],
})
export class EchoPageModule {}
