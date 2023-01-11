


const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

//Tarea
const _useState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = _useState('Goku');

console.log(nombre);
setNombre();