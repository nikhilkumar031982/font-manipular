leftWristx=0;
rightWrist=0;

nosex=0;
nosey=0;

difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}



function modelLoaded(){
    console.log("posnet is initialized");

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.x;

    console.log(nosex,nosey);

    leftwristx=results[0].pose.leftWrist.x;
    righttwristx=results[0].pose.rightWrist.x;

   difference=floor(leftwristx- righttwristx);

  
}
}
function draw(){
    background("#e8fcff");
    
    fill("blue");
    textSize(difference);
   text("VIVAAN",nosex,nosey);
}