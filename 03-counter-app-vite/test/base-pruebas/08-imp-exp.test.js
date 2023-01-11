import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });
    test('getHeroeById debe de retornar un undefined si no existe el ID', () => {

        const id = 19;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();

    });
    test('getHeroesByOwner debe retornar heroes de DC', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // expect( heroes ).toEqual(
        //     [
        //         { id: 1, name: 'Batman', owner: 'DC' },
        //         { id: 3, name: 'Superman', owner: 'DC' },
        //         { id: 4, name: 'Flash', owner: 'DC' }
        //     ]
        // )
        expect( heroes.length ).toBe(2);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) );

    });
})
