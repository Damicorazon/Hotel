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