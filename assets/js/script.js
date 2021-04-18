//ricchiamo ID 
var price_bread = document.getElementById('price');
var button_calc = document.getElementById('button');
var nome_utente = document.getElementById('name');
var ingredients = document.getElementById('ingredient-checkbox');

//configurazioni
var price_base = 50;
pane_lonely(price_base, price_bread);

//eventi
button_calc.addEventListener('click',function(){
  var check_name = nome_utente.value.trim();

  if(check_name.length === 0){
    alert('Inserisci Il tuo nome:')
  }else{
    var prezzi = 0;

    for (var i = 0; i < ingredients.length; i++){
    var ingredienti = ingredients[i];
    
      if(ingredienti.checked === true){
        prezzi += parseInt(ingredienti.value);
      }
    }
   pane_lonely = ((price_base + prezzi), price_bread);
  }
});

//funzioni
function pane_lonely(valore, target){
  target.innerHTML = valore.toFixed(2)
}