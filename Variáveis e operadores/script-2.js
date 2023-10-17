//aula 2 javascript devmedia operadores
//O que são operadores!
//Os operadores são símbolos usados para modificar ou até mesmo gerar um novo valor. Na programação, em muitos casos, precisamos que um valor seja gerado a partir da análise, combinação ou comparação entre valores e são os operadores que fazem isso:

var atendeAClassificacaoEtária = idade >= 18

//Operadores Aritméticos Eles são adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%). Exemplos:Eles são adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%). Exemplos:
var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250

//Operador módulo (%) Esse operador retorna o resto de uma divisão.
var resto1 = 15 % 4; // resultado: 3
var resto2 = 3 % 1.2; // resultado: 0.6

var verificaSeEPar = 20 % 2 == 0;

console.log("texto" + " e complemento");
// Vai imprimir "texto e complemento"

console.log("5" + "6");
// Vai imprimir "56"

console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//Operação aritmética e atribuição
//Existem situações nas quais precisamos gerar um novo valor e atribuí-lo a mesma variável.
var preco = 10;
preco = preco + 20;

var preco = 20;
preco += 1;


//Incremento e decremento
//Os operadores de incremento ++ e decremento --, são usados para adicionar ou subtrair o valor 1 de uma variável

var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

contador--;
console.log(contador);// contador agora vale 5


var numero = 9;
console.log(++numero);

var numero = 9;
console.log(numero++);

//O operador de incremento (++) soma 1 e o de decremento (--) subtrai 1 do valor de uma variável.


//Operadores relacionais Os operadores de comparação servem para comparar dois valores, retornando um booleano (true ou false). Os operadores de comparação são: ==, !=, <, >, <=, >=, === e !==.
//Operadores ==, !=  O operador de igualdade == compara dois valores e retorna true se eles forem iguais.

console.log( 21 == 21 ); // vai imprimir true
console.log( 120 == 100); // vai imprimir false

//operador de desigualdade !=.
console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false


console.log(  "20" == 20  ); // true
console.log(  true == 1 ) ; // true

"21" === 21 // o resultado será false
1 === true // o resultado será false


"21" !== 21 // o resultado será true
1 !== true // o resultado será true

null == undefined // o resultado será true
null != undefined // o resultado será false

true == 1 // o resultado será true
true != 1 // o resultado será false
false == 0 // o resultado será true
false != 0 // o resultado será false

//operadores lógicos Os operadores lógicos comparam dois valores booleanos e retorna um valor true ou false. São eles:
//&&, || e !

true && false // false
false || false // false
!true // false

1 == '1' || "a" == "a" // true
35 === '35' && 1 == 10 // false
!( 'a' == 1) // true

true && true // true
true && false // false
false && false // false

true || false // true
false || true // true
false || false // false

true || false && false || false && false || false && false && false || false ||false && false || false && false



!false // true
!true // false

!(true || false) // false
!(true || true && false) // false
