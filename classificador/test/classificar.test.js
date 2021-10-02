const definirFaixaEtaria = require('../lib/classificador');

const nome = 'Pedro';
const idade = 21;

describe('Classificar', () => {
    test('Idade válida', () => {
        expect(() => {
            definirFaixaEtaria(nome, idade)
        }).not.toThrow("Idade inválida");
    });

    test('Criança', () => {
        expect(definirFaixaEtaria(nome, idade).tipo).toBe('Criança');
    });

    
});