const usdInput = document.getElementById('USD');
const brlInput = document.getElementById('BRL');

const submitButton = document.getElementById('submit');

const cotation = 5.22;

submitButton.addEventListener('click', event => { 
    console.log ('botao');

    let value = usdInput.value;

    brlInput.value = (value * cotation).toFixed(2);
    

})



console.log(usdInput);
console.log(brlInput);
console.log(submitButton);

/*request e response => estudos de requisicao http
consumir api 
funcao fetch */
