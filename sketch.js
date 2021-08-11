var ship1; 
var ship2;
var ship3;
var ship4;
var seaImg;

function preload(){
  ship1 = loadAnimation("ship-1.png");
  ship2 = loadAnimation("ship-2.png");
  ship3 = loadAnimation("ship-3.png");
  ship4 = loadAnimation("ship-4.png");

}

function setup(){
  createCanvas(400,400);

seaImg = loadImage("sea.png");
seaImg.addImage(seaImg);
}

function draw() {
 
}