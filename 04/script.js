const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

document.getElementById('conversorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    const valor = parseFloat(document.getElementById('valor').value);
    const moedaOrigem = document.getElementById('moedaOrigem').value;
    const moedaDestino = document.getElementById('moedaDestino').value;

    let resultado;

    if (moedaOrigem === 'BRL') {
        if (moedaDestino === 'USD') {
            resultado = valor / taxaUSD;
        } else if (moedaDestino === 'EUR') {
            resultado = valor / taxaEUR;
        } else if (moedaDestino === 'GBP') {
            resultado = valor / taxaGBP;
        } else {
            resultado = valor; // Moeda de destino igual a BRL
        }
    } else if (moedaOrigem === 'USD') {
        if (moedaDestino === 'BRL') {
            resultado = valor * taxaUSD;
        } else if (moedaDestino === 'EUR') {
            resultado = (valor * taxaUSD) / taxaEUR;
        } else if (moedaDestino === 'GBP') {
            resultado = (valor * taxaUSD) / taxaGBP;
        } else {
            resultado = valor; // Moeda de destino igual a USD
        }
    } else if (moedaOrigem === 'EUR') {
        if (moedaDestino === 'BRL') {
            resultado = valor * taxaEUR;
        } else if (moedaDestino === 'USD') {
            resultado = (valor * taxaEUR) / taxaUSD;
        } else if (moedaDestino === 'GBP') {
            resultado = (valor * taxaEUR) / taxaGBP;
        } else {
            resultado = valor; // Moeda de destino igual a EUR
        }
    } else if (moedaOrigem === 'GBP') {
        if (moedaDestino === 'BRL') {
            resultado = valor * taxaGBP;
        } else if (moedaDestino === 'USD') {
            resultado = (valor * taxaGBP) / taxaUSD;
        } else if (moedaDestino === 'EUR') {
            resultado = (valor * taxaGBP) / taxaEUR;
        } else {
            resultado = valor; // Moeda de destino igual a GBP
        }
    }

    document.getElementById('resultado').innerText = `Resultado da conversão: ${resultado.toFixed(2)} ${moedaDestino}`;
});