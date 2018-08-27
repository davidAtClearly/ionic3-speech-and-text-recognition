## Speech-to-Text and Text-to-Speech using Ionic 2 & 3 ##

This is a sample project demonstrating how to use text-to-speech and speech-to-text with an Ionic 3 application.


This project relies on cordova-plugin-tts for Text-to-Speech functionality and the @ionic-native/speech-recognition for Speech-to-Text functionality.


This works on both Android & iOS as well as Ionic 2 & 3.


## How to run it ##

1. Clone the repo.
2. Open the command prompt/terminal, navigate to the root directory of the cloned repo, and run the following commands:

```
npm install

ionic cordova platform add android

ionic cordova run android -d
```


The speech-to-text example can be found in the HomePage component (src/pages/home).


The speech-to-text example can be found in the AboutPage component (src/pages/home).


There is also an example of going from speech-to-text-to-speech in the EchoPage component (src/pages/echo).


