import { types } from "../../../src/auth"

describe('pruebas en Types', () => {

    test('debe de regresar esto Types', () => {

        expect(types).toEqual({
            login: '[AUTH] Login',
            logout: '[AUTH] Logout'
        })

    })
 
})