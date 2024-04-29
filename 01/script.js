window.alert("Calculo de IMC");
let peso = window.prompt("Insira seu peso: ");
let altura = window.prompt("Insira sua altura: ");

let imc = peso / (altura * altura);

if (imc <= 18.5){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 || imc <= 24.9){
    console.log("Peso Ideal");
} else if (imc >= 25.0 || imc <= 29.9){
    console.log("Acima do peso");
} else if (imc >= 30.0 || imc <= 34.9){
    console.log("Você está com obesidade grau 1");
} else if (imc >= 35.0 || imc <= 39.9){
    console.log("Você está com obesidade grau 2");
} else if (imc > 40.0){
    console.log("Você está com obesidade grau 3 (Mórbida)")
}