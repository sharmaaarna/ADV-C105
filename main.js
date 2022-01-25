Webcam.set({
    width:300,
    height:300,
    dest_width:300,
    dest_height:300,
    image_format:"png",
    png_quality:90
});

cam=document.getElementById("Show");
Webcam.attach('#Show');

function DONE(){
    Webcam.snap(function(data_uri){
        document.getElementById("Done").innerHTML='<img id="DONEDONE" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9hzgTzy9Q/model.json',modelLoaded);
function modelLoaded(){
    console.log('model losded!');
}

function chick(){
    img=document.getElementById('DONEDONE');
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("OB").innerHTML=result[0].label;
        document.getElementById("AC").innerHTML=result[0].confidence.toFixed(3);
    }
}