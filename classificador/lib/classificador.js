// Exercício 4

function definirFaixaEtaria(nome, idade){

    let tipo;

    if(idade <= 11) tipo = 'Criança';

    else if (idade <= 18) tipo = 'Adolescente';

    else if (idade <= 59) tipo = 'Adulto';

    else tipo = 'Idoso';

    if(idade < 0 || idade >= 110){
        throw 'Idade inválida'
    } else return({
        result : nome + " é " + tipo, tipo
    });

}

module.exports = definirFaixaEtaria;