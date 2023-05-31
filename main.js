function setup(){
canvas = createCanvas(640,480);
canvas.position(450, 250);
background("lightblue");
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 230, 150, 220, 200);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 80);
circle(590, 50, 80);
circle(50, 430, 80);
circle(590, 430, 80);
fill(0, 255, 0);
stroke(0, 255, 0);
rect(30, 90, 40, 300);
rect(570, 90, 40, 300);
rect(90, 30, 460, 40)
rect(90, 410, 460, 40)
}

function snap(){

}