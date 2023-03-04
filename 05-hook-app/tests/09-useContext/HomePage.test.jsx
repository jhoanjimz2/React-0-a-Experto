import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('pruebas en el componente <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Jhoan'
    }
    
    test('debe de mostrar el componente sin el Usuario', () => {
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');
    });
    
    test('debe de mostrar el componente sin el Usuario', () => {
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(user.id.toString());
    });
    
})