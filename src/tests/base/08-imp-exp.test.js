import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

    test('debe retorna un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find (h => h.id ===id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe de retornar un undefined si Heroe  no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
        
    });

    // debe de retornar un arreglo con los heroes de Dc.
    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual( heroesData);

    })
    
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
    
        const owner = 'Marverl ';
        const heroes = getHeroesByOwner(owner);

        expect ( heroes.length).toBe(2);
    })
    
    
    //onwer.
    // toEqual al arreglo filtrado.
    
    // debe de retornar un arreglo con los heroes de Marvel.
    // length = 2
    
    
    
})
