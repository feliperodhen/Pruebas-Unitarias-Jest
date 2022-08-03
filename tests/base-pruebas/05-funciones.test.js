import {getUser} from '../../src/base-pruebas/05-funciones.js';
import {getUsuarioActivo} from '../../src/base-pruebas/05-funciones.js';

describe('pruebas en funciones 05', () => {

    test('get user debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
    };
    const user = getUser();

    expect(testUser).toEqual(user);

    });

    test('get usuario activo debe retornar un objeto', () => {


        const name = 'Felipe';
        const testUser = getUsuarioActivo(name);

        expect(testUser).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
});



});




