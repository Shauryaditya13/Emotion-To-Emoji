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
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s1jbRClwh/model.json",modelloaded);

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

function check() {
    img=document.getElementById("capture_image");
    classifier.classify(img,getresult);
}

function getresult(error,results) {
    if(error) {
        console.log(error)
    }
    else {
        console.log(results)
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("result_emotion_name").innerHTML=prediction1;
        document.getElementById("result_emotion_name2").innerHTML=prediction2;
        speak();

        if(prediction1=="Happy") {
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }

        if(prediction1=="Sad") {
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }

        if(prediction1=="Angry") {
            document.getElementById("update_emoji").innerHTML="&#128545;";
        }

        if(prediction1=="Crying") {
            document.getElementById("update_emoji").innerHTML="&#128546;";
        }


        if(prediction2=="Happy") {
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }

        if(prediction2=="Sad") {
            document.getElementById("update_emoji2").innerHTML="&#128532;";
        }

        if(prediction2=="Angry") {
            document.getElementById("update_emoji2").innerHTML="&#128545;";
        }

        if(prediction2=="Crying") {
            document.getElementById("update_emoji2").innerHTML="&#128546;";
        }
    }
}
