import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


declare var TTS:any; // this is a reference variable to the cordova-plugin-tts library

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public textInput:string = "";

  constructor(public navCtrl: NavController) {

  }


  /** attemp to convert the user's input into audio */
  test(){

    // pass the user's input to the TTS plugin
    TTS.speak({
      text : this.textInput,
      locale : "en-US", 
      rate : 1.0
    })
  }



}
