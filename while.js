// let contador = 0

// while (contador < 5) {
//     console.log("N°- " + contador)
//     contador++
// }

/////////////

// let contador = 10;

// while (cintador > 0) {
//     console.log(contador);
//     contador--;
// }

/////////////

// let numero = 3;
// let contador = 0;

// console.log("Tabuada de multiplicação - N " + numero);

// while (contador <= 10) {
//     let resultado = numero * contador;

//     console.log(numero + "x" + contador + " = " + resultado);
//     contador++
// }

/////////////

let capital_emprestado = 3000;
let taxa_juros = 0.02; // <- = 2%

let contador = 1;
let parcelas_totais = 5; 

while (contador <= parcelas_totais) {
    let numeros_parcelas = (contador)

    let juros_emprestimos = capital_emprestado * taxa_juros * numeros_parcelas;

    console.log("A taxa de juros no periodo do " + numeros_parcelas + "°mes é de R$"+ juros_emprestimos + ",00");

    contador++
}



