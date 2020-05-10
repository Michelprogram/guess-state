let state = $('.land')
let liste_state = []
let liste_nombre = []
let compteur = 0
let point = 0

let current_state = ''
let zoom = 0

/*
Faire un zoom pour Washington DC
*/



state.each((index)=>{
  liste_state.push($(state[index]).attr('title'))
  liste_nombre.push(index)
})


function Guess_state(){
if (liste_nombre.length == 0)
  {
    console.log("flag");
    let total = 0.0
    $('#Bonne_Mauvaise').text('Fin de la partie')
    $("#jeux").append('<button onclick="document.location.reload()">Rejouer</button>')
    total = (point * 20)/51
    $('#Score').text(total.toFixed(2)+'/51')
  }
  else
  {
    compteur = 0
    let random = Math.floor(Math.random()*Math.floor(liste_nombre.length))
    current_state = liste_nombre[random]
    current_state = liste_state[current_state]
    liste_nombre.splice(random,1)
    $('#State_guess').text(current_state)
  }

}

$('button').click(()=>{
  let self = $('button')
  self.css('top','-30%')
  $('#jeux').append('<h3>Guess State</h3>').append('<p>Trouver : <span id="State_guess"></span></p>').append('<p><span id="Bonne_Mauvaise"></span></p>').append('<p><span id="Score"></span></p>')
  $('#jeux h3,p').css('font-size','35px')
  Guess_state()
})


$('path').click(function(){
  let reponse = $(this).attr('title')
  if (reponse === current_state)
  {
    $('#Bonne_Mauvaise').text('Bien jouer')
    $(this).css('fill',"green")
    point++
    Guess_state()
  }
  else if(compteur == 2)
  {
    $("path[title="+"'"+current_state+"'"+"]").css('fill','red')//Ajout de quote à a variable Ex: variable = "variable"
    Guess_state()
  }
  else{
    $('#Bonne_Mauvaise').text('Louper')
    compteur ++
  }

})
