eyeX = 0;
eyeY = 0;
function preload(){
    flower_crown=loadImage('https://i.postimg.cc/MGQBJN8t/flower.png');
}
function setup(){
     canvas= createCanvas(300,300);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(300,300);
     video.hide();

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
} 
function draw(){
    image(video, 0, 0, 300, 300);
    image(flower_crown,eyeX,eyeY,140,90);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        eyeX = results[0].pose.rightEye.x-50;
        eyeY = results[0].pose.rightEye.y-95;
        console.log("eye x = " + eyeX);
        console.log("eye y = "+eyeY);
    }
}
function take_snapshot(){
    save('myFilterImage.png');
}