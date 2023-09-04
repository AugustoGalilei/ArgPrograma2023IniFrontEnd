// ampliar.js
document.addEventListener("DOMContentLoaded", function() {
    var botonMas = document.getElementById("botonMas");
    var parrafosAmpliar = document.querySelectorAll(".ampliar");
    
    botonMas.addEventListener("click", function() {
      parrafosAmpliar.forEach(function(parrafo) {
        if (parrafo.style.display === "none" || parrafo.style.display === "") {
          parrafo.style.display = "block";
          botonMas.textContent = "menos...";
        } else {
          parrafo.style.display = "none";
          botonMas.textContent = "mas...";
        }
      });
    });
  });
  


    

