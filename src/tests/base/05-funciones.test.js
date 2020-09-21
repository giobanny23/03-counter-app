import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';



describe('Pruebas de 05-funciones.js', () => {
        test('getUser debe de retornar un objeto', () => {
            const userTest ={
                uid: 'ABC123',
                username: 'El_Papi1502'
            }
            const user = getUser();

            expect(user).toEqual(userTest);
         })
        //getUsuarioActivo debe de retonar un objeto.
        test('getUsuarioActivo debe retornar un objeto', () => {

            const nombre = 'juan';
            const user = getUsuarioActivo(nombre);

            expect( user ).toEqual({
                uid: 'ABC567',
                username: nombre
            })
            
        })
        
})
