function clicar(){
    //alert("clicou");
    document.getElementById("titulo").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("titulo"));
}

function redireciona(){
    //outra aba
   // window.open("http://www.google.com");
   //mesma janela
    window.location.href = "http://www.google.com";
}

function trocar(elemento){
    //alert("Trocar texto");
    //document.getElementById("mouseMover").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function mouseReturn(elemento){
    //document.getElementById("mouseMover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function change(elemento){
    alert("selecionou o valor "+elemento.value);
}



/*
var idade = prompt("Qual sua idade?");
if(idade < 18){
    alert("menor de idade");
}else{
    alert("maior de idade");
}


function validaIdade(idade){
    var valida;
    if(idade >=18){
        valida = true;
    }else{
        valida=false;
    }
    return valida;
}

var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));

*/
/*
var nome = "Lucas";
var idade1 = 14;
var idade2 = 76;

console.log(idade1+idade2);

//alert("bem vindo " + nome);


frase = "Japão é o melhor time do mundo";
console.log(nome);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
*/

/*
var lista = ["maça","pera","melancia"];
lista.push("uva"); //insere elemento
console.log(lista);
lista.pop(); //deleta elemento
console.log(lista);
*/

/*
var fruta = {nome: "maça", cor: "vermelho"};
console.log(fruta);
console.log(fruta.cor);
*/
/*
var frutas = [{nome: "maça", cor: "vermelho"}, {nome: "uva", cor: "roxo"}, {nome: "pera", cor: "amarelo"}];
console.log(frutas);
console.log(frutas[1].nome);
*/