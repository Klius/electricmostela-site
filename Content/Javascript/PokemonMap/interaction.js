window.onload=function(){
		addMouseOvers();
	};
	function addMouseOvers(){
		var areas = document.getElementsByTagName("area");
		for(var i = 0; i < areas.length; i++){
			areas[i].onmouseover = function(){
				resaltarMapa(this);
			};
		}
	}
	function resaltarMapa(area){
		console.log(area)
		anchors = document.getElementsByTagName("a");
		for(var i = 0; i < anchors.length ; i++){
			if(area.alt === anchors[i].id){
				anchors[i].className="selected";
			}
			else{
				anchors[i].className="";
			}
		}
		seleccionarCiudad(area.alt);
		getInfo(area.alt);
	}
	function seleccionarCiudad(classe){
		document.getElementById("selectedtown").className=classe;
	}
	/*Ajax request to get town information*/
	function getInfo(townName)
	{
		var xhttp = new XMLHttpRequest();
		var url = "assets/townInfo/"+townName+".js";
  		xhttp.onreadystatechange = function(){
		    if (xhttp.readyState == 4 && xhttp.status == 200) 
		    {
		      setTownDescription(xhttp.responseText);
		    }
	  	};
		xhttp.open("GET", url, true);
		xhttp.send();
	}


	function setTownDescription(info){
		var town = JSON.parse(info);
		var div = document.getElementById("information");
		div.innerHTML="";//clear the div
		
		var title = getElement("h4",town.name);

		var description = getElement("i",town.description);

		var assetList = document.createElement("ul");
		assetList = addElementToList(assetList, "Pokemon Center", town.pokemonCenter);
		assetList = addElementToList(assetList, "Shop", town.shop);
		if(town.gim !=="none"){
			assetList = addElementToList(assetList, "Gim", town.gim);
			assetList = addElementToList(assetList, "Gim Leader", town.gimLeader);
			assetList = addElementToList(assetList, "Gim Type", town.gimType);
		}
		div.appendChild(title);
		div.appendChild(description);
		div.appendChild(assetList);
	}

	function getElement(elementType,text){
		var element = document.createElement(elementType);
		element.innerHTML = text;
		return element;
	}
	function addElementToList(list,descriptionText,text){
		var li = document.createElement("li");
		li.innerHTML = descriptionText+": "+text;
		list.appendChild(li);
		return list;
	}