Webcam.set({
    width: 350,
    height: 320,
    image_format: "png",
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("cam");

Webcam.attach(camera)

function takePic(){
    document.getElementById("namenamename").innerHTML="Computing..."
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML = "<img id='capt-img' src='"+data_uri+"'>"
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded)

function modelLoaded(){
    console.log("Model Loaded!");
}

function idPic(){
    img = document.getElementById("capt-img");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
        alert("There was a teensy weensy error. Try again in a bit!");
    }
    else{
        console.log(results);
        document.getElementById("namenamename").innerHTML = results[0].label;
    }
}

