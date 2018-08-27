import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SpeechRecognition } from "@ionic-native/speech-recognition";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // holds the speech recognition results
  public translatedText:string = "";

  constructor(public navCtrl: NavController, public sr: SpeechRecognition) {

  }


  /** attempt to activate the trascribing logic */
  async turnOnTranscribing(){

    //check to see if you already have permission to access the device's microphone
    if(!(await this.sr.hasPermission())){
      this.sr.requestPermission()

      //try to get the user's permission 
      .then(this.startTranscribing,()=>{ alert("This feature cannot be used.")})
    }else{
      //you have the user's permission to access their device's microphone, so start listening
      this.startTranscribing();
    }
  }

  /** start listening to what the person is saying */
  startTranscribing(){

    // listen for english and only expect one match in the results array
    this.sr.startListening({
      language : "en-EN",
      matches : 1
    }).subscribe((_matches)=>{

      // if the API was able to generate at least one matching word or phrase, display it
      if(_matches && _matches.length > 0){
        this.translatedText = _matches[0];
      }
    },(_e)=>{
      // if something went wrong, show an error message
      alert("I couldn't understand what you said. Perhaps you're drunk?");
    })

  }

  /** stop listening to the user's mic */
  stopTranscribing(){
    this.sr.stopListening();
  }




}
