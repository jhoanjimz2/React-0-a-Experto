import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";




export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    

    useEffect(() => {
        // console.log('useEffect called!');
    }, [])
    useEffect(() => {
        // console.log('useEffect called!')
    }, [ formState ])
    useEffect(() => {
        // console.log('useEffect email!')
    }, [ email ])
    

    return (
        <>
            <h1>Formulario con custom Hook</h1>
            <hr></hr>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="jhoanjimz2@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                onClick={ onResetForm }
                className="btn btn-primary mt-2">
                Borrar
            </button>

        </>
    )
}
 