import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => jest.clearAllMocks())

    test('debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        expect( screen.getByText('BreakingBad Quotes') );
        expect( screen.getByText('Loading...') );

        const nextButton = screen.getByRole('button', { name: 'Next quote' }); 
        expect(nextButton.disabled).toBeTruthy();
        // screen.debug();

    })

    test('debe mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Jhoan', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Jhoan') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' }); 
        expect(nextButton.disabled).toBeFalsy();

    })

    test('debe llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Jhoan', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();

    })

})