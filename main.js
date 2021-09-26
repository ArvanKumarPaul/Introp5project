function preload() {}

function setup() {

  canvas = createCanvas(550,500);
  canvas.position(150, 400);
  video = createCapture(VIDEO);
  video.hide();
  tint_color = "";

}

function draw() {

  image(video, 120, 120, 300, 250);

  fill(255,0,0);
  stroke(255,0,0);
  circle(60,90,30);
  circle(470,90,30);
  circle(60,410,30);
  circle(470,410,30);

  fill(0, 255, 21);
  stroke(0, 255, 21);
  rect(75,80,380,20);
  rect(460,100,20,300);
  rect(75,100,20,300);
  rect(75,400,380,20);
  

}

function take_snapshot() {

  save("user.png");

}

