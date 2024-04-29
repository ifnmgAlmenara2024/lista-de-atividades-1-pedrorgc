window.alert("Conversor de temperatura");

let tempCelsius = window.prompt("Insira uma temperatura em graus Celsius: ");

let converterTemp = (tempCelsius * 9/5) + 32;

console.log(`Temperatura em Fahrenheit: ${converterTemp}`)