import { useEffect, useState } from "react";
import { Message } from "./Message";




export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'RaigaArai',
        email: 'jhoanjimz2@gmail.com'
    });

    const  { email, username } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

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
            <h1>Formulario Simple</h1>
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
            {
                (username === 'RaigaArai2') && <Message/>
            }

        </>
    )
}
 