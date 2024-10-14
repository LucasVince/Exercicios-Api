const btnConvert = document.querySelector('button');
const selectMoedaBase = document.querySelector('#moedaBase');
const selectMoedaDestino = document.querySelector('#moedaDestino');
const inputNum = document.querySelector('input');
const text = document.querySelector('p');

btnConvert.addEventListener('click', () => {
    try {
        if (selectMoedaBase.value == '' || selectMoedaDestino.value == '' || selectMoedaBase.value == selectMoedaDestino.value) {
            alert('Selecione as moedas de forma correta');
            throw new Error('Selecione as moedas de forma correta');
        } else {
            const convertFunc = async () => {
                const baseCurrency = selectMoedaBase.value;
                const targetCurrency = selectMoedaDestino.value;
                const apiKey = 'f40e48755c853503cf85637a';
                const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}?symbols=${targetCurrency}`;

                const response = await fetch(url);
                const data = await response.json();

                const num = Number(inputNum.value);

                text.innerText = `$${num} ${baseCurrency} =  $${(num * data.conversion_rates[targetCurrency]).toFixed(2)} ${targetCurrency}`;

                console.log(data);
                console.log(data.conversion_rates[targetCurrency]);
            }

            convertFunc();
        }
    } catch(erro) {
        console.error(erro);
        text.innerText = erro;
    }
});