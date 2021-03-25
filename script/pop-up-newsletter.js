var modal = document.getElementById("myModal");

 var btn = document.getElementById("myBtn");

 var fermer = document.getElementsByClassName("close")[0];

 btn.onclick = function() {
  modal.style.display = "block";
}

// console.log(fermer)
 fermer.onclick = function() {
  modal.style.display = "none";
}

 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

