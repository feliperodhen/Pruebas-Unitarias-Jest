import {getSaludo} from '../../src/base-pruebas/02-template-string.js';


describe('Purbeas en 02-template-string', () => {

    test('getSaludo debo de retornar "Hola Felipe', () => {

        const name = 'Felipe';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });

});