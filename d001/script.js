const btnConverter = document.querySelector('button');
const selectMoeda = document.querySelector('#moeda');

btnConverter.addEventListener('click', () => {
    if (selectMoeda.value == '') {
        alert('Por favor, selecione uma moeda.');
        return;
    } else {
        const targetCurrency = selectMoeda.value;

        const apiKey = '9e5df7712d065cad18e41efdd8d805c4';
        const url = `http://api.currencylayer.com/live?access_key=${apiKey}&currencies=${targetCurrency}`;

        const convertFunc = async () => {
            const response = await fetch(url);
            const data = await response.json();
            const rate = data.quotes[`USD${targetCurrency}`];

            const text = document.querySelector('p');

            text.innerText = `1 $USD = $${rate.toFixed(2)} ${targetCurrency}`;

            console.log(data);
            console.log(data.quotes);
        }

        convertFunc();
    }
});