var stepX = 5;
var stepY = 5;
var rectangle = [0,10,50,50];
var colors = ['yellow','red','blue','green'];
/*************************************************/
/***** Resize Canvas *********/
/************************************/
function resizeCanvas(){
	var c = document.getElementById("canvas");
	var width = document.getElementById("canvaswidth").value;
	var height = document.getElementById("canvasheight").value;
	canvas.width = width;
	canvas.height = height;
	console.log(width);
}

/***************************************************/
/** Drawing part and animation functions *****/
/**********************************************/
function move(){
	var color = getColor(); 
	clearRectangle(rectangle);
	drawRectangle(rectangle,color);
	incrementX(rectangle);
	incrementY(rectangle);
	requestAnimationFrame(move);
}
function getColor(){
	return colors[Math.floor((Math.random() * colors.length) + 0)];
}
function incrementX(rectangle){
	var c = document.getElementById("canvas");
	var leftX = rectangle[0]+rectangle[2]; 
	if((leftX+stepX) > c.width){
		stepX = -1 * stepX;
	}
	else if((rectangle[0]+stepX) < 0){
		stepX = -1 * stepX;
	}
	rectangle[0]+=stepX;
}
function incrementY(rectangle){
	var c = document.getElementById("canvas");
	var bottomY = rectangle[1]+rectangle[3]; 
	if((bottomY+stepY) > c.height){
		stepY = -1 * stepY;
	}
	else if((rectangle[1]+stepY) < 0){
		stepY = -1 * stepY;
	}
	rectangle[1]+=stepY;
}
function clearCanvas(){
	var c = document.getElementById("canvas");
	var ctx =  c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
}
function clearRectangle(rect){
	var c = document.getElementById("canvas");
	var ctx =  c.getContext("2d");
	ctx.clearRect(rect[0] - stepX, rect[1], rect[2], rect[3]);
}
function drawRectangle(rectangle,color){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = color;
	ctx.fillRect(rectangle[0],rectangle[1],rectangle[2],rectangle[3]);
}
move();
/*
function drawImage(x){
	var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("carlton");
   	ctx.drawImage(img, x, 0);
}
function drawLine(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0,200);
	ctx.lineTo(800,400);
	ctx.stroke();
}
function drawCircle(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
}
function drawText(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	// Create gradient
	var grd = ctx.createLinearGradient(0,200,200,0);
	grd.addColorStop(1,"yellow");
	grd.addColorStop(1,"blue");
	grd.addColorStop(0,"red");
	grd.addColorStop(0,"green");
	
	ctx.fillStyle = grd;
	ctx.font = "30px Arial";
	ctx.fillText("Hello World",150,50);
}
function strokeText(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.strokeText("Hello World",320,50);
}
function drawLinearGradient(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	// Create gradient
	var grd = ctx.createLinearGradient(0,0,200,0);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"white");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(10,80,150,80);
}
function drawCircularGradient(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	// Create gradient
	var grd = ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"black");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(0,190,150,80);
}
drawRectangle();
drawLine();
drawCircle();
drawText();
strokeText();
drawLinearGradient();
drawCircularGradient();*/
