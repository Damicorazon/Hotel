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

img1.addEventListener('mouseover', fonction7)

function fonction7(){
  img1.src = 'img/chambreBlancMiniEclaire.jpg';
}

img1.addEventListener('mouseleave', fonction8)

function fonction8(){
  img1.src = 'img/chambreBlancMini.jpg';
}

/* Deuxieme image */
img2.addEventListener('mouseover', fonction9)

function fonction9(){
  img2.src = 'img/chambreBoiserie2Eclaire.jpg';
}

img2.addEventListener('mouseleave', fonction10)

function fonction10(){
  img2.src = 'img/chambreBoiserie2Mini.jpg';
}

/* Troisieme image */
img3.addEventListener('mouseover', fonction11)

function fonction11(){
  img3.src = 'img/chambreNoirEclaire.jpg';
}

img3.addEventListener('mouseleave', fonction12)

function fonction12(){
  img3.src = 'img/chambreNoirMini.jpg';
}