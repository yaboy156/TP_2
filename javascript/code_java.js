
window.onload = function(){

//évènement pour cacher le boutton ajouter tâche//
  var bouton1 = document.getElementById('ajouterTache');
  bouton1.addEventListener('click', function() {
  bouton1.setAttribute('class','cacher');

  var saisiTexte = document.getElementById('saisi_de_texte');
  saisiTexte.classList.toggle('cacher');
  });

//évènement pour le boutton ajouter//
  var bouton2 = document.getElementById('btajouter');
  bouton2.addEventListener('click', function() {
    var zonedetexte = document.getElementById('zonedetexte');
    var texte = document.createTextNode(zonedetexte.value);
    var liste = document.getElementById('listeTaches');
    var input = document.createElement('input');
    var li = document.createElement('li');
    
    input.setAttribute('type','checkbox');
    li.appendChild(input);
    li.appendChild(texte);
    liste.appendChild(li);

    var saisiTexte = document.getElementById('saisi_de_texte');
    var bouton1 = document.getElementById('ajouterTache');
    bouton1.classList.toggle('cacher');
    saisiTexte.classList.toggle('cacher');
  });

//évènement pour le boutton annuler//
    var bouton3 = document.getElementById('btannuler');
    bouton3.addEventListener('click', function() {
    var saisiTexte = document.getElementById('saisi_de_texte');
    var bouton1 = document.getElementById('ajouterTache');
    saisiTexte.classList.toggle('cacher');
    bouton1.classList.toggle('cacher');
  });
};