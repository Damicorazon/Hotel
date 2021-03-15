/* Premier cadrant bleu */

var plus1 = document.getElementById('premierPlus');
var cadrant1 = document.getElementById('cadrant1');
var fleche1 = document.getElementById('premiereFleche');
// console.log(plus1);

plus1.addEventListener('click', fonction1)
fleche1.addEventListener('click', fonction2)

function fonction1(){
  cadrant1.style.right = '-54%';
  plus1.style.display = 'none';
  fleche1.style.display = 'initial';
}

function fonction2(){
  cadrant1.style.right = '-94%';
  plus1.style.display = 'initial';
  fleche1.style.display = 'none';
} 


/* Deuxieme cadrant bleu */

var plus2 = document.getElementById('deuxiemePlus');
var cadrant2 = document.getElementById('cadrant2');
var fleche2 = document.getElementById('deuxiemeFleche');
// console.log(plus1);

plus2.addEventListener('click', fonction3)
fleche2.addEventListener('click', fonction4)

function fonction3(){
  cadrant2.style.left = '-4%';
  plus2.style.display = 'none';
  fleche2.style.display = 'initial';
}

function fonction4(){
  cadrant2.style.left = '-42%';
  plus2.style.display = 'initial';
  fleche2.style.display = 'none';
}

/* Troisieme cadrant bleu */

var plus3 = document.getElementById('troisiemePlus');
var cadrant3 = document.getElementById('cadrant3');
var fleche3 = document.getElementById('troisiemeFleche');
// console.log(plus1);

plus3.addEventListener('click', fonction5)
fleche3.addEventListener('click', fonction6)

function fonction5(){
  cadrant3.style.right = '-54%';
  plus3.style.display = 'none';
  fleche3.style.display = 'initial';
}

function fonction6(){
  cadrant3.style.right = '-94%';
  plus3.style.display = 'initial';
  fleche3.style.display = 'none';
} 


/* Hover sur les 3 images du haut */

var img1 = document.getElementById('premierCarréIMG');
var img2 = document.getElementById('deuxiemeCarréIMG');
var img3 = document.getElementById('troisiemeCarréIMG');
var boutonPlus1 = document.getElementById('boutonPlus1');
var boutonPlus2 = document.getElementById('boutonPlus2');
var boutonPlus3 = document.getElementById('boutonPlus3');

img1.addEventListener('mouseover', fonction7)
boutonPlus1.addEventListener('mouseover', fonction7)

function fonction7(){
  img1.src = 'img/chambreBlancMiniEclaire.jpg';
}

img1.addEventListener('mouseleave', fonction8)
boutonPlus1.addEventListener('mouseleave', fonction8)

function fonction8(){
  img1.src = 'img/chambreBlancMini.jpg';
}

/* Deuxieme image */
img2.addEventListener('mouseover', fonction9)
boutonPlus2.addEventListener('mouseover', fonction9)

function fonction9(){
  img2.src = 'img/chambreBoiserie2Eclaire.jpg';
}

img2.addEventListener('mouseleave', fonction10)
boutonPlus2.addEventListener('mouseleave', fonction10)

function fonction10(){
  img2.src = 'img/chambreBoiserie2Mini.jpg';
}

/* Troisieme image */
img3.addEventListener('mouseover', fonction11)
boutonPlus3.addEventListener('mouseover', fonction11)

function fonction11(){
  img3.src = 'img/chambreNoirEclaire.jpg';
}

img3.addEventListener('mouseleave', fonction12)
boutonPlus3.addEventListener('mouseleave', fonction12)

function fonction12(){
  img3.src = 'img/chambreNoirMini.jpg';
}


// SLIDER 1:


var chevronGauche1 = document.getElementById('premierChevron');

var chevronDroit1 = document.getElementById('deuxiemeChevron');

var sliderImg = document.getElementById('imageSlider1');

var images = ['chambreBlanc.jpg', 'salleDeBainBlanc.jpg'];
var img = "img/";
var i = 0;

chevronGauche1.addEventListener('click', gauche)
chevronDroit1.addEventListener('click', droite)


function gauche() {
  if(i <= 0 ) i = images.length;
  i--;
  return imgDefaut();
}
function droite(){
  if( i >= images.length-1) i = -1;
  i++;
  return imgDefaut();
}
function imgDefaut() {
  return sliderImg.style.backgroundImage = "url("+img + images[i]+")";
}


// SLIDER 2:


var chevronGauche2 = document.getElementById('chevronBlanc');

var chevronDroit2 = document.getElementById('chevronBlanc2');

var sliderImg2 = document.getElementById('imageSlider2');

var images2 = ['chambreNoir.jpg', 'salleDeBainNoir.jpg'];
var t = 0;

chevronGauche2.addEventListener('click', gauche2)
chevronDroit2.addEventListener('click', droite2)


function gauche2() {
  if(t <= 0 ) t = images2.length;
  t--;
  return imgDefaut2();
}
function droite2(){
  if( t >= images2.length-1) t = -1;
  t++;
  return imgDefaut2();
}
function imgDefaut2() {
  return sliderImg2.style.backgroundImage = "url("+img + images2[t]+")";
}


// SLIDER 3:


var chevronGauche3 = document.getElementById('troisiemeChevron');

var chevronDroit3 = document.getElementById('quatriemeChevron');

var sliderImg3 = document.getElementById('imageSlider3');

var images3 = ['chambreBoiserie.jpg','chambreBoiserie2.jpg', 'salleDeBainBoiserie.jpg'];
var y = 0;

chevronGauche3.addEventListener('click', gauche3)
chevronDroit3.addEventListener('click', droite3)


function gauche3() {
  if(y <= 0 ) y = images3.length;
  y--;
  return imgDefaut3();
}
function droite3(){
  if( y >= images3.length-1) y = -1;
  y++;
  return imgDefaut3();
}
function imgDefaut3() {
  return sliderImg3.style.backgroundImage = "url("+img + images3[y]+")";
}