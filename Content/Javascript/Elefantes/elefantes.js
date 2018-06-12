numeroDeElefantes = 1;
window.onload= elefantes;
function elefantes(){
switch(numeroDeElefantes){
	case 1:
  	  		responsiveVoice.speak(numeroDeElefantes+" elefante se balanceaba sobre la tela de una araña. y como veía que no se caía fueron a llamar a otro elefante","Spanish Female");
          break;
  default:
  		responsiveVoice.speak(numeroDeElefantes+" elefantes se balanceaban sobre la tela de una araña. y como veían que no se caían fueron a llamar a otro elefante","Spanish Female");
  break;
}

  numeroDeElefantes += 1;
  document.getElementById('elefantes').innerHTML += '<img src="Elefantue.gif"/>';
  setTimeout(elefantes,10000);
}
