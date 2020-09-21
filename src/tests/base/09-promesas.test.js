import { getHeroesByOwner } from ("../../base/08-imp-exp");
import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from '../../data/heroes';



describe('Pruebas con promesas ', () => {
    test(' getHeroeById debe retornar un heroe  async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect (heroe).toBe(heroes);
            done();
        })
    });
    
    
})
