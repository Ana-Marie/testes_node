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

    test('Adolescente', () => {
        expect(definirFaixaEtaria(nome, idade).tipo).toBe('Adolescente');
    });

    test('Adulto', () => {
        expect(definirFaixaEtaria(nome, idade).tipo).toBe('Adulto');
    });

    test('Idoso', () => {
        expect(definirFaixaEtaria(nome, idade).tipo).toBe('Idoso');
    });

    
});