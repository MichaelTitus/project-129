song1 = "";
song2 = "";
leftwristX = 0;
rightwristX = 0;
leftwristY = 0;
rightwristY = 0;
scoreleftwrist;
console.log(scoreleftwrist);

function preload() {
    song1 = loadSound("Hyrule_Castle.mp3")
    song2 = loadSound("The_Deadwood_Stage.mp3")
}
function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on('pose', gotposes)
}

function draw() {
    image(video, 0, 0, 600, 500)
    fill('red');
    stroke('yellow');
    if(scoreleftwrist>0){
    circle(leftwristX,leftwristY,20);
    numberleftwristY = Number(leftwristY);
    removedecimals = floor(numberleftwristY);
    volume = removedecimals / 500;
    document.getElementById("vol").innerHTML = volume;
    song1.setVolume(volume);
    song1.play()
    }
}


function modelloaded() {
    console.log("model is loaded")
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
        scoreleftwrist = results[0].pose.keypoints[9].score;
    }
}