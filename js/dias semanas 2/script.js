let dia = parseInt(prompt("Digite o dia da semana em numeros"))

let semana = (dia == 1)? "Domingo" : (dia == 2)? "Segunda" : (dia == 3)? "Terça" :
(dia == 4)? "Quarta" : (dia == 5)? "Quinta" : (dia == 6)? "Sexta" : (dia == 7)? "Sabado" :
"O numero digitado não coresponde a um dia da semana"
alert(semana)