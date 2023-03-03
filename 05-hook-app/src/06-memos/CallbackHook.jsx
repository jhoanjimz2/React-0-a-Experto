import { useCallback, useState, useEffect } from "react";
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value);
        },
        []
    )

    useEffect(() => {
        //incrementFather();
    }, [incrementFather])
    
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr></hr>
            <ShowIncrement
                increment={ incrementFather }
            />
        </>
    )
}
