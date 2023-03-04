import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('pruebas en el useForm', () => {

    const initialForm = {
        name: 'Jhoan',
        email: 'jhoanjimz2@gmail.com'
    }

    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    })

    test('debe cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => { onInputChange({ target: { name: 'name', value: 'Anita' } }); });
        expect( result.current.formState.name ).toBe('Anita');
    })

    test('debe hacer el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => { 
            onInputChange({ target: { name: 'name', value: 'Anita' } });
            onResetForm(); 
        });
        expect( result.current.formState.name ).toBe(initialForm.name);
    })

})