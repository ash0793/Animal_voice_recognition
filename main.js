https://teachablemachine.withgoogle.com/models/PcnkCzb0k/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PcnkCzb0k/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
 
var cat = 0;
var dog = 0;
var cow = 0;
var lion = 0;


function gotResults(error, results) {
    if (error) {
        console.log(error);
    }

    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) +1;
        random_number_g = Math.floor(Math.random()*255) +1;
        random_number_b = Math.floor(Math.random()*255) +1;
    
        document.getElementById("label_result_confidence").innerHTML = 'Detected ' + results [0].label+": "+ (results[0].confidence*100).toFixed(0) + "    "+"Detected "+ results[1].label + ": "+(results[1].confidence*100).toFixed(0);
        document.getElementById("label_result").innerHTML = 'Detected voice is of: '+results[0].label;
        document.getElementById("label_result").style.color = "rgb("+ random_number_r + ", "+random_number_g+", "+random_number_b+")";
        document.getElementById("label_result_confidence").style.color = "rgb("+ random_number_r + ", "+random_number_g+", "+random_number_b+")";
        
        img = document.getElementById('listen.jpg');

        if(results[0].label == "Barking") {
            document.getElementById('ear_image').src= 'dog.gif';
            dog = document.getElementById(dog).value+1;
        }
        else if(results[0].label == "Meowing") {
            document.getElementById('ear_image').src= 'cat.gif';
            cat = document.getElementById(cat).value+1;
        }
        else if(results[0].label == "Mooing") {
            document.getElementById('ear_image').src= 'cow.gif';
            cow = document.getElementById(cow).value+1;
        }
        else if (results[0].label == "Roaring"){
            document.getElementById('ear_image').src= 'lion-roar.gif';
            lion = document.getElementById(lion).value+1;
        }
        else {
            document.getElementById('ear_image').src= "listen.jpg";
        }
    }
}