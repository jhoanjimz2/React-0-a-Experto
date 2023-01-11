import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en FirstApp', () => {

    const title = 'Hola Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot 2', () => {
        const { container } = render(<FirstApp title={title}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola Soy Goku"', () => {
        render(<FirstApp title={title}/>);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props',() => {
        render(
            <FirstApp 
                title={title} 
                subTitle={subTitle}
            />
        );
        expect( screen.getAllByText(subTitle).length ).toBe(2);
    });

});