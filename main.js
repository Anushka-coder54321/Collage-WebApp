var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;

}

function speak(){
    var sync=window.speechSynthesis;

    speak_data="taking your selfie in 5 seconds";

    var utterThis=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    }
    Webcam.set({
        width:360,
        height:250,
        image_format:'jpeg',
        jpeg_quality:90

        camera = document.getElementById("camera");
       

    })