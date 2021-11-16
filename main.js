noseX= 0;
noseY= 0;

function preload(){
    clown_nose= loadImage('https://i.postimg.cc/kMpM4b4J/nose.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is Initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-21;
        noseY=results[0].pose.nose.y-23;
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(0,0,255);
    image(clown_nose, noseX, noseY,50,50);
}

function take_snapshot(){
    save('myfilter-image.png');
}