const gerarNumeroAleatorio = require('../lib/generate');

/* TESTES

1. início do intervalo é um valor negativo;
2. o fim do intervalo é um valor negativo;
3. o início do intervalo é igual ao fim do intervalo;
4. um intervalo válido [200, 3000] é fornecido 

*/

let inicio = 100;
let fim = 500;

describe('Generate', () => {

    test('Teste 1', () =>{
        expect(inicio).toBeGreaterThan(0); // se for maior que zero, passa no teste
    });

    test('Teste 2', () =>{
        expect(fim).toBeGreaterThan(0); // se for maior que zero, passa no teste
    });

});
