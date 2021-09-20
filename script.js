const usdInput = document.getElementById('USD');
const brlInput = document.getElementById('BRL');

/*const submitButton = document.getElementById('submit');*/

const cotation = 5.22;

function replaceComma(string) {
    return string.replace(',', '.');
}


usdInput.addEventListener( 'input', (event) => {
    

    let value = Number(
        replaceComma(event.target.value)
        );

        fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD')

        .then(response => {
            return response.json();
        })

        .then(data => {
            
            brlInput.value = (value * data.data.rates.BRL).toFixed(2);
        });

   
});

brlInput.addEventListener( 'input', (event) => {

    let value = Number(
        replaceComma(event.target.value)
        );

        fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD')

        .then(response => {
            return response.json();
        })

        .then(data => {
            
            usdInput.value = (value / data.data.rates.BRL).toFixed(2);
        });

});




/*request e response => estudos de requisicao http
consumir api 
funcao fetch */
