var canvas;
var quadTree;
var ctx;
var color = "red";
var dx = 4;
var dy = 4;
function initCanvasAndContext(){
		canvas = document.getElementById("canvas");
		if(canvas&&canvas.getContext){
			ctx = canvas.getContext("2d");
			if (ctx){
				//totOK
				return 0;
			}
			else{
				//can't get context
				return -2;
			}
		}
		else{
			//no canvas
			return -1;
		}
}

window.onload = function(){
		switch(initCanvasAndContext())
		{
			case 0:
				ancho = canvas.width;
				alto = canvas.height;
				quadTree = new QuadTree({x:0,y:0,width:ancho,height:alto});

				limiteDerecha = ancho - ball.radio;
				limiteIzquierda = ball.radio;
				limiteAbajo = alto-ball.radio;
				limiteArriba = ball.radio;
				//
				ctx.lineWidth = ball.radio;
				ctx.fillStyle = color;
				render();
				//Add a function to add more balls
				canvas.onclick = function onclick(event){
					var randam = getRandomInt(-1,1);
					randam = (randam == 0) ? (1): randam;
					var newball = new Ball(10,event.clientX,event.clientY,dx * randam,dy * randam,balls.length);
					balls.push(newball);
				};
				break;
		}
	};
	
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
	
	