//introdução a linguagem javascript devmedia
//somanado números de tipos diferentes
var soma = 40.10 + 10;

// alterando o tipo da variável
var idade = 18;
idade = "26 anos"; //tipo string

//criando uma função
function somadoDoisNumeros(n1, n2) {
    return n1 + n2
}

//sintaxe simples
var nome = "João";
var idade = 18;
var estaMatriculado = true;

//exemplo 1
// caracteristica: tipagem mutável
var aluno = "joaquim"; //variável do tipo string

aluno = { //variavel do tipo object
    nome: "joão",
    idade: 20
}

//exemplo 2
//variavel do tipo number
var valorDoServiço = 20.00;

//variável do tipo Array
valorDoServiço = [13.99, 34.87, 29.99];

//caracteristica: case sensitive
//javascript vai diferenciar etras maiusculas de minusculas no codigo
//exemplo 1
var nomeusuario = "João";
var nomeUsuario = "Tiago";

console.log(nomeusuario);
//João

console.log(nomeUsuario);
//Tiago


//exemplo 2 case sensitive
var usuario = new Usuario(); //usuario variavel
//Usuario classe


//aula javascript é multiparadigma
//vejamos um cálculo usando a programação estruturada:
var primeiroNumero = 9;
var segundoNumero = 4;
console.log(primeiroNumero + segundoNumero);
//mesmo exemplo usando funções:
var primeiroNumero = 9;
var segundoNumero = 4;

var somarNumero = function(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}
console.log(somarNumero(primeiroNumero, segundoNumero));

//exemplo utilizando classes (com o framework react native)
class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.somar = this.somar.bind(this);
    }
    somar(n1, n2) {
        return n1 + n2;
    }
}

//aula de node
//node é um intrepretador de código javascript é ele que permite executar código javascript no servidor.
