alert ("Página carregada com sucesso!")

function pulaLinha() {

    document.write("<br>");
}

var numero1 = 5
var numero2 = 10
var soma = numero1+numero2
document.write ("A soma de 5 e 10 é igual a " + soma + ".");

pulaLinha();

var multiplicacao = numero1*numero2
document.write (" A multiplicação de 5 por 10 é igual a " + multiplicacao + ".");

pulaLinha();

var divisao = numero1/numero2
document.write (" A divisão de 5 por 10 é igual a " + divisao + ".");

pulaLinha();

if (numero1 == numero2) document.write ("A variável 1 é igual a variável 2.");
else document.write (" A variável 1 é diferente da variável 2.");


