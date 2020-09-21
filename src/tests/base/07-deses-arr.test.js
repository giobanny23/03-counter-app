import '@testing-library/jest-dom';

import {retornaArreglo} from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion', () => {
    test('Debe retornar un numero', () => {
        
   
        const [letras, numeros] = retornaArreglo();
        
        //console.log(typeof letras);

        expect( letras).toBe( 'ABC');
        expect( typeof letras).toBe( 'string');
    })
    
})
