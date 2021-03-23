

/*********  map  *********/ 

var mymap = L.map("map").setView([ 48.56300,2.34268], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGVzdGlidXp6IiwiYSI6ImNra3BsdGFwcTJmOXAydnRkdjRsbWQ4b2sifQ.BJJVO7rCoMtxYPVOUioQxw', {
	maxZoom: 18,
	attribution: 'TestiBuzz',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);

L.marker([48.56300, 2.34268]).addTo(mymap);


/*********  form  *********/ 


var nom = document.getElementById('nom')
var prenom = document.getElementById('prenom')
var email = document.getElementById('email')
var tel = document.getElementById('tel')
var message = document.getElementById('message')
 
 
nom.addEventListener('change', nomRouge);
nom.addEventListener('change', envoyerForm);
prenom.addEventListener('change', prenomRouge);
prenom.addEventListener('change', envoyerForm);
tel.addEventListener('change', telRouge);
tel.addEventListener('change', envoyerForm);
email.addEventListener('change', emailRouge);
email.addEventListener('change', envoyerForm);
message.addEventListener('change', messageRouge);
message.addEventListener('change', envoyerForm);

function nomRouge(){
    if( nom.value.length < 3){
        nom.style.border = "1px solid #EE4724";
    } else{
        nom.style.background = "#C2FFC2";
        nom.style.border = "1px solid #00e300";
    }
}

function prenomRouge(){
    if( prenom.value.length < 3){
        prenom.style.border = "1px solid #EE4724";
    } else{
        prenom.style.background = "#C2FFC2";
        prenom.style.border = "1px solid #00e300";
    }
}
 

function telRouge(){
    if( tel.value.length < 3 ){
        tel.style.border = "1px solid #EE4724";
    } else{
        tel.style.background = "#C2FFC2";
        tel.style.border = "1px solid #00e300";
    }
}


function emailRouge(){
    if( email.value.length < 6){
         email.style.border = "1px solid #EE4724";
    } else{
        email.style.background = "#C2FFC2";
        email.style.border = "1px solid #00e300";
    }
}

function messageRouge(){
    if( message.value.length < 10){
		message.style.border = "1px solid #EE4724";
    } else{
        message.style.background = "#C2FFC2";
        message.style.border = "1px solid #00e300";
    }
}

 


//---- DISABLED 
var nom = document.getElementById('nom')
var prenom = document.getElementById('prenom')
var email= document.getElementById('email')
var tel = document.getElementById('tel')

 

document.getElementById('RGPD').addEventListener('click', checkForm);
nom.addEventListener('change', checkForm);
prenom.addEventListener('change', checkForm);
tel.addEventListener('change', checkForm);
email.addEventListener('change', checkForm);


function checkForm() {
	var checkbox = document.getElementById("RGPD");
	console.log(checkbox);
	if (checkbox.checked == true && prenom.value.length > 2 && nom.value.length  > 2 && email.value.length > 6  && tel.value.length >= 10  )
	{
		document.getElementById("envoyerForm").disabled = false;
	} else {
		document.getElementById("envoyerForm").disabled = true;
	}
}

 
