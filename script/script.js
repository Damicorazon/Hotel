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
  cadrant2.style.right = '4%';
  plus2.style.display = 'none';
  fleche2.style.display = 'initial';
}

function fonction4(){
  cadrant2.style.right = '44%';
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