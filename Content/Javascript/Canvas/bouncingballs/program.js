var ball =  new Ball(10,50,100,4,4,0);
var balls = Array(ball);
var ancho,largo;
var limiteDerecha,limiteIzquierda,limiteArriba,limiteAbajo;

function Ball(radio, x, y,dx,dy,id) {
    this.radio = radio;
    this.x = x;
    this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.collided = false;
	this.leftWall = false;
	this.rightWall = false;
	this.topWall = false;
	this.bottomWall =false;
	this.id=id;
}

function render(){
	quadTree.clear();
	quadTree.insert(balls);
	detectCollision();
	move();
	window.requestAnimationFrame(render);
}

function move(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	for(var index = 0; index < balls.length; index++)
	{
		if(balls[index].collided){
			if(balls[index].rightWall || balls[index].leftWall){
				balls[index].dx *= -2;
			}
			if(balls[index].topWall || balls[index].bottomWall){
				balls[index].dy *= -2;	
			}
			if(!balls[index].topWall && !balls[index].bottomWall && !balls[index].leftWall && !balls[index].rightWall){
				balls[index].dx *= -2;
				balls[index].dy *= -2;
			}
			balls[index].collided = false;
		}
		else{
			if(balls[index].dx<0){ balls[index].dx = dx*-1;}
			else{ balls[index].dx = dx;}
			if(balls[index].dy<0){ balls[index].dy = dy*-1;}
			else{ balls[index].dy = dy;}
		}
		balls[index].x += balls[index].dx;
		balls[index].y += balls[index].dy;
		ctx.beginPath();
		ctx.arc(balls[index].x,balls[index].y,balls[index].radio,0,0.2*Math.PI,true);
		ctx.fill();
	}
	
}
function detectCollision() {
	var objects = [];
	quadTree.getAllObjects(objects);

	for (var x = 0, len = objects.length; x < len; x++) {
		quadTree.findObjects(obj = [], objects[x]);

		for (y = 0, length = obj.length; y < length; y++) {

			// DETECT COLLISION ALGORITHM
			if ( objects[x].id != obj[y].id &&
				(objects[x].x < obj[y].x + obj[y].radio &&
			     objects[x].x + objects[x].radio > obj[y].x &&
				 objects[x].y < obj[y].y + obj[y].radio &&
				 objects[x].y + objects[x].radio > obj[y].y)) 
			{
				objects[x].collided = true;
				obj[y].collided = true;
			}
			objects[x] = checkColl(objects[x]);
		}
	}
}

function checkColl(ball){
	ball.leftWall = false;
	ball.rightWall = false;
	ball.topWall = false;
	ball.bottomWall =false;
	if(ball.x>limiteDerecha){
		ball.rightWall = true;
		ball.collided = true;
	}
	if(ball.x < limiteIzquierda){
		ball.leftWall = true;
		ball.collided = true;
	}
	if(ball.y > limiteAbajo){
		ball.bottomWall = true;
		ball.collided = true;
	}
	if(ball.y < limiteArriba){
		ball.topWall = true;
		ball.collided = true;
	}
	return ball;
}