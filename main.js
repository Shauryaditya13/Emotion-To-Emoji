prediction1="";
prediction2="";

Webcam.set({
width:350,height:300,image_format:'png',png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_url+"'>";
    });
}

console.log("ml5 version"+ml5.version);
classifier=ml5.imageClassifier("",modelloaded);

function modelloaded() {
    console.log("modelloaded");
}

function speak() {
    var synth=window.speechSynthesis;
    speakdata1="The first prediction is " + prediction1;
    speakdata2="The second prediction is " + prediction2;
    var utterance=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterance);
}
speak();
