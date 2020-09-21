import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-string.js',() =>{

    test('Prueb en el metodo de getSaludo', () =>{

        const nombre = 'Giobanny';

        const saludo = getSaludo(nombre);
      
       expect(saludo).toBe('Hola ' + nombre );
    })

    // getSaludo debe de retornar Hola Carlos! si no hay argumento en nombre
    test('getSaludo debe de retornar Hola Carlos! si no hay argumento en nombre', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe('Hola carlos!');
    })
    
    

})