import { AuthContext } from "../../src/auth";
import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en Private Route', () => {

    test('debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const  contextValue = { 
            logged: true,
            user: {
                name: 'Jhoan Jimenez',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();

    })

})