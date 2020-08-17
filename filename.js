function addElement () {

  var inputField = document.getElementsByClassName("item")[0].value;

  // crée un nouvel élément div
  var newDiv = document.createElement("div");
  newDiv.className = "item1";
  newDiv.id = "item1"
  
  // Crée les boutons permettant de supprimer ou déplacer un l'élément ajouté
  // creating button element  
  var button1 = document.createElement('BUTTON');
  button1.className = "buttons";
  button1.style.marginLeft = "auto";
  var button2 = document.createElement('BUTTON');
  button2.className = "buttons";  
                 
  // Création des icones FontAwesome à afficher sur les boutons
                 
  var moveIcon = document.createElement('i');
  var delIcon = document.createElement('i');
  moveIcon.className = 'fas fa-arrows-alt';
  delIcon.className = 'fas fa-times';
	  
  // apparenter les icones aux boutons 
  button1.appendChild(moveIcon);
  button2.appendChild(delIcon);
  
  // Creer un element pour le contenu saisi dans la barre
  var newContent = document.createElement('p');
  var itemText = document.createTextNode(inputField);
  newContent.appendChild(itemText);
  newContent.className = "itemtext";
  // ajoute le nœud texte à la nouvelle div créé
  newDiv.appendChild(newContent);
  // apparenter les boutons à la div 
  newDiv.appendChild(button1);
  newDiv.appendChild(button2);
  
  // ajoute le nouvel élément créé et son contenu dans le DOM
  var currentDiv = document.getElementById('addedItem');
  document.body.insertBefore(newDiv, currentDiv);
  // Remise à zéro du champ d'entrée
  document.getElementsByClassName("item")[0].value = '';
}

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//function moveElement () {}

//function delElement () {}

// trigger button with enter key : https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
