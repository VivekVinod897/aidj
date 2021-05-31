song1 = 0;
song2 = 0;

score_leftWrist = 0;

var status_song

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){
song1.loadSound("music.mp3");
song2.loadSound("music2.mp3");
}

function setup(){
canvas = createCanvas(600, 500)
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("poses", gotPoses);
}

function modelLoaded(){
console.log("modelLoaded");
}

function draw(){
image(video , 0 , 0 , 600 , 500);
fill("008080")
stroke("#FFFFFF")

if(score_leftWrist > 0.2){
circle(leftWristX , leftWristY , 20);
song2.stop();
}
if(status_song == false){
song1.play();

}
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
score_leftWrist = results[0].pose.keypoints[9].score;
}
}