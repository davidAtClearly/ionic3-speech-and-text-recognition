import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public textInput:string = "";

  constructor(public navCtrl: NavController, public tts: TextToSpeech) {

  }


  /** attemp to convert the user's input into audio */
  test(){

    // pass the user's input to the TTS plugin
    this.tts.speak({
      text : this.textInput,
      locale : "en-US", 
      rate : 1.0
    })
  }



}
