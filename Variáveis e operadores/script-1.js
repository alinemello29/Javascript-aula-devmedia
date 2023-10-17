//Variáveis e operadores
//linguagem javascript: variáveis e tipos de dados
//var e de variável
var programador = "Aline"
var pontuacao = 20;
//para acessar o valor de um avariável basta utilizar o nome dela
console.log(programador);
//imprime Aline
console.log(pontuacao);
//imprime 20

//exemplos de declaração de variável
var nome = "aline";
console.log(nome);

var idade = 26;
conole.log(idade + "anos");

var valor = 25.99;
var desocnto = 5;
var precoFinal = valor - desconto;

console.log("valor final =" +  precoFinal);

//criando variável com let
let tecnologia = "javascript";
let anoAtual = 2023;

//qual diferença entre var e let
//ao utilizar var conseguimos redeclarar uam mesma variável
var nome = "José";
var nome = "Pedro";

//já utilizando let isso não é possivel e um erro vai ocorrer
let nome = "José";
let nome = "Pedro";
//Uncaught SyntaxError: Identifier 'nome' has already been declaredUncaught SyntaxError: Identifier 'nome' has already been declared

//aula tipos de dados: string, number e boolean
//definindo tipo de variável
//todo número é do tipo number
var valor = 6; // tipo number
var preco = 29.98; //tipo number

//todo caracter dentro de aspas simples ou dupla e do tipo string
//aspas simples
var sobrenome = 'Melo'; //tipo string
var texto = 'Hello World'; //tipo string
//aspas duplas
var nome = "Aline";  //tipo string
var idade = "26 anos"; //tipo string
var titulo = "bem vindo"; //tipo string

//os valores true ou false são usadas para um tipo booleano
var ligado = true; //tipo boolean
var ativado = false; //tipo boolean

//Para descobrir o tipo de uma variável sem ser pelo seu valor, basta utilizar 'typeof' antes do nome da variável para imprimir no terminal.
var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean'

//tipos de dados: array
//O array é uma coleção de dados e com esse recurso podemos colocar mais de um valor em apenas uma variável.
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"]
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados);
// (3) ["Rio de Janeiro", "São Paulo", "Bahia"]
// utilizar console.log()dessa forma com um array não surtirá o efeito esperado

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados[0]);
var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados[1]);
//jeito certo

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens[0]); //resultado impresso: JavaScript
console.log(linguagens[3]); //resultado impresso: C#

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem;
//Por exemplo, para modificar a linguagem "JAVA" para "C" no array linguagens

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
linguagens[2] = "C";
//O que podemos fazer assim também, escrevendo menos como vemos no Código

var titulo = "Programador";
var quantidadeDeVagas = 5;
var vagaAtiva = true;
//Um array pode ser usado para armazenar tipos de dados diferentes.

//Contando a quantidade de elementos
//Existem casos em que precisamos saber quantos elementos tem dentro do array. Isso é feito utilizando .length depois do nome do array. Veja um exemplo no Código 10:
var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens.length);
// Vai imprimir 4
//No código acima utilizamos .length para contar a quantidade de elementos do array linguagens.

//exemplo 1
var telefones = [
    '(11) 98899 - 8787',
    '(22) 3455 - 8819'
];

//exemplo 2
var telefones = [
    '(11) 98899 - 8787',
    '(22) 3455 - 8819',
    '(91) 95620 - 0000'
];

//Aula 4 tipos de dados: undefined
//No JavaScript, undefined e null podem ser utilizados para representar a ausência de valor de uma variável.
var nome;
//Quando for esse o caso, o JavaScript dará a variável o valor undefined.
var nome;
console.log(nome); //vai imprimir undefined
//O que é undefined?
//É tanto o nome de um tipo quanto o nome do único valor que esse tipo pode receber.
//Mas qual é o problema de uma variável ser undefined?
//Vamos voltar a variável nome. Digamos que alguém tente contar quantas letras essa variável possui, presumindo que o seu tipo é string. Usamos a propriedade length para isso, que toda string possui, como mostra o Código
console.log(nome.length);

//Uma variável undefined não é uma string e não possui a propriedade length, o que vai gerar um erro, como vemos no Código
//TypeError: Cannot read property 'length' of undefined Erro gerado por tentar acessar a propriedade length de uma variável undefined
//Erro gerado por tentar acessar a propriedade length de uma variável undefined
var nome = '';

var idade;

console.log( idade + 1 );

var idade = 0;

//Aula 5 tipos de dados: null
//null
//É possível iniciar uma variável com null, o que significa que queremos adiar intencionalmente ou não atribuir um valor a ela, como mostra o Código 

var nome = null;

var nome  = null;
console.log(nome);
var nome  = null;
console.log(nome);
// vai imprimir null

//Manipulando uma variável null
//Devemos ter cuidado ao lidar com uma variável cujo valor é null.
//Por exemplo, se presumirmos o tipo de uma variável, tentando acessar algum método ou atributo dela enquanto o seu valor for null, um erro como o do Código

var nome = null;
console.log(nome.length);
//TypeError: Cannot read property 'length' of null
//Nesse caso o erro é tentar acessar a propriedade length de null, assumindo que nome é uma string.
var preco = null;
console.log(preco.toFixed(2));
//TypeError: Cannot read property 'toFixed' of null
//Quando fazemos um cálculo, como no Código, e uma das variáveis utilizadas é null, o valor da mesma será convertido para 0.
var idade = null;

console.log( idade + 1 );

//aula 5 declarando uma constante
//Nessa aula veremos como proteger valores que nunca deveriam mudar utilizando a palavra-chave const.
//Algumas coisas mudam... outras não
//No código de uma aplicação é fácil encontrar valores que nunca devem mudar. Uma url, PI, um percentual de desconto, etc.
//É uma boa prática declarar esses valores utilizando a palavra-chave const, como no Código
const url = "https://www.devmedia.com.br/";

//Logo que definimos uma const precisamos dar um valor para ela, porque caso isso não aconteça, será gerado um erro, como vemos no Código
// const nome;
//SyntaxError: Missing initializer in const declaration

//Outra diferença é que uma vez definido esse valor não conseguimos mais alterar e se isso for feito também vai gerar um erro
const aula = "JavaScript";
aula = "JS";
//TypeError: Assignment to constant variable.

// var url = ”https://api.com.br/usuarios”;

// código
// código
// e mais código

// url = “https://api.com.br/registros”;

// código
// código
// e mais código


// console.log(url);

// const url = ”https://api.com.br/usuarios”;

// código
// código
// e mais código

// url = “https: //api.com.br/registros”;

// Neste ponto o código vai quebrar
//Uncaught TypeError: Assignment to constant variable.