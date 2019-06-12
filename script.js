//  Ex1) Usando condicional em js

let media = prompt("Digite seu nome:");

if(media>10 || media<0){
    alert ("Valor inválido");
}
else if (media>=7){
    alert ("Aprovado!!");
}
else if (media<=7 && media>=5){
    alert ("Exame!!");
}
else{
    alert ("Reprovado!!");
}

// Ex2) Usando laço de repetição em js
let signos = ["aries","aquario","cancer","peixes"];

for(let i=0;i<4;i++){
 console.log(signos[i]);
}

// Ex3) Mostrando tamanho da lista
let signos = ["aries","aquario","cancer","peixes"];

console.log (signos.length)

// Ex4) Exibindo todos os signos 
let signos = ["aries","aquario","cancer","peixes","libra","leão","gemeos"];

 for (let i=0;i<signos.length;i++){
    console.log(signos[i]);
 }

// Ex5) Percorrendo uma lista de uma forma mais simples

let signos = ["aries","aquario","cancer","peixes","libra","leão","gemeos"];

for (let valores of signos){
    console.log(valores);
}

of imprimi os valores e in as posições

Usando for in
let signos = ["aries","aquario","cancer","peixes","libra","leão","gemeos"];

for (let indice in signos){
    console.log(signos[indice]);
}

// Ex6) Mostrando posição e nome dos signos
let signos = ["aries","aquario","cancer","peixes","libra","leão","gemeos"];

for (let indice in signos){
    console.log("O valor da posição é [" + indice + "] = "  + signos[indice]);

} 