var xmlhttp = new XMLHttpRequest();
var url = "pokemons.js";
var Pokemons;
var pokedexIndex = 0;
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        Pokemons = JSON.parse(xmlhttp.responseText);
        changePokemon(0);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
document.getElementById("buttonNext").addEventListener("click", function(){
    changePokemon(1);
});
document.getElementById("buttonBack").addEventListener("click", function(){
    changePokemon(-1);
});
function changePokemon(increment){
	pokedexIndex += increment;
	if(pokedexIndex < 0){
		pokedexIndex = 0;
	}
	else if(pokedexIndex >= Pokemons.length){
		pokedexIndex -= increment;
	}

	document.getElementById("img").className = "transparent";
	setTimeout(changeIMG, 1024);

	document.getElementById("index").innerHTML = Pokemons[pokedexIndex].index;
	document.getElementById("name").innerHTML = Pokemons[pokedexIndex].name;
}
function changeIMG(){
	var imatge = document.getElementById("img");
	imatge.src = Pokemons[pokedexIndex].image_url;
	imatge.onload=function(){this.className="";};
}