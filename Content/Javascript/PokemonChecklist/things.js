var pkmns;
function load_pokemons(gen,savedURL){
	var xmlhttp = new XMLHttpRequest();
	if (savedURL == null){
		var url = "gen"+gen+".js";
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var Pokemons = JSON.parse(xmlhttp.responseText);
			showPokemons(Pokemons);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function showPokemons(pokemons){
	pkmns = pokemons;
	imgURL="https://www.serebii.net/pokearth/sprites/rb/";
	for (i=0;i<pokemons.length;i++)
	{
		var poke = pokemons[i];
		var div = document.createElement("DIV");
		div.className="pokemon-button";
		var label = document.createElement("LABEL");
		label.id= poke["index"];
		var img = document.createElement("IMG");
		img.src=imgURL+poke["index"]+".png";
		var p = document.createElement("P");
		p.textContent = poke["name"].capitalize();
		var input = document.createElement("input");
		input.type="checkbox";
		input.id=poke["index"];
		input.name=poke["index"];
		if (poke["gotcha"]!=null){
			input.checked = poke["gotcha"];
		}
		input.onchange = function(){countPokemons();updateMonList(this.id,this.checked)};
		//append
		div.appendChild(img);
		div.appendChild(p);
		div.appendChild(input);
		label.appendChild(div);
		document.getElementById("pokemons").appendChild(label);
	}
}
function countPokemons(){
	var inputs =  document.getElementsByTagName("INPUT");
	var pkmnCount = 0;
	for(i=0;i<inputs.length;i++){
		if (inputs[i].checked){
			pkmnCount += 1;
		}
	}
	document.getElementById("pkmnOwned").innerHTML = pkmnCount;
}
function saveList() {
	
}
//updates json list so we can save it later
function updateMonList(pkmnid,checked){
	pkmns[parseInt(pkmnid)-1].gotcha = checked
 	//alert(pkmns[parseInt(pkmnid)-1].name);
}
/*
			<div class="pokemon-button">
				<label for="001">
					<img src="https://www.serebii.net/pokearth/sprites/rb/001.png"/>
					<p>Bulbasaur</p>
					<input id="001" name="001" type="checkbox"></input>
				</label>
			</div>
*/
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
load_pokemons(1,null);
