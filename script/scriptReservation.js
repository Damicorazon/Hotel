/* BOUTON ENVOYER DE RESERVATION */

document.getElementById('checkContact').addEventListener('click', checkRgpd);

function checkRgpd() {
	var checkBox = document.getElementById("checkContact");
							 
	if (checkBox.checked == true && nom.value.length >= 3 && prenom.value.length >= 3 && telephone.value.length == 10 && mail.value.length >= 6 && arrivee.value != 'defaut'){
		document.getElementById("submitContact").disabled = false;
	} else {
		document.getElementById("submitContact").disabled = true;
	}
}

/* Verification formulaire */

var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var tel = document.getElementById('telephone');
var mail = document.getElementById('mail');
var arrivee = document.getElementById('dateArrivee');
var depart = document.getElementById('dateDepart');

var valeurNom = nom.value;
// console.log(valeurNom);

nom.addEventListener('change', nomRouge);
nom.addEventListener('change', checkRgpd);
prenom.addEventListener('change', prenomRouge);
prenom.addEventListener('change', checkRgpd);
tel.addEventListener('change', telRouge);
tel.addEventListener('change', checkRgpd);
mail.addEventListener('change', mailRouge);
mail.addEventListener('change', checkRgpd);
arrivee.addEventListener('change', arriveeRouge);
arrivee.addEventListener('change', checkRgpd);
depart.addEventListener('change', departRouge);
depart.addEventListener('change', checkRgpd);

function nomRouge(){
    if( nom.value.length < 3){
        nom.style.background = "rgba(238,71,36,0.5)";
        nom.style.border = "1px solid #EE4724";
    } else{
        nom.style.background = "rgba(106,219,90,0.5)";
        nom.style.border = "1px solid #6ADB5A";
    }
}

function prenomRouge(){
  if( prenom.value.length < 3){
      prenom.style.background = "rgba(238,71,36,0.5)";
      prenom.style.border = "1px solid #EE4724";
  } else{
      prenom.style.background = "rgba(106,219,90,0.5)";
      prenom.style.border = "1px solid #6ADB5A";
  }
}

function telRouge(){
  if( tel.value.length < 10 ){
      tel.style.background = "rgba(238,71,36,0.5)";
      tel.style.border = "1px solid #EE4724";
  } else{
      tel.style.background = "rgba(106,219,90,0.5)";
      tel.style.border = "1px solid #6ADB5A";
  }
}

function mailRouge(){
  if( mail.value.length < 6){
      mail.style.background = "rgba(238,71,36,0.5)";
      mail.style.border = "1px solid #EE4724";
  } else{
      mail.style.background = "rgba(106,219,90,0.5)";
      mail.style.border = "1px solid #6ADB5A";
  }
}

function arriveeRouge(){
  if( arrivee.value != 'defaut'){
      arrivee.style.background = "rgba(106,219,90,0.5)";
      arrivee.style.border = "1px solid #6ADB5A";
  } else{
      arrivee.style.background = "rgba(238,71,36,0.5)";
      arrivee.style.border = "1px solid #EE4724";
  }
}

function departRouge(){
  if( depart.value != 'defaut2'){
      depart.style.background = "rgba(106,219,90,0.5)";
      depart.style.border = "1px solid #6ADB5A";
  } else{
      depart.style.background = "rgba(238,71,36,0.5)";
      depart.style.border = "1px solid #EE4724";
  }
}