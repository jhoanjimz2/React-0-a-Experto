import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {

    console.log('render');

    const [ counter, setCounter ] = useState( value );

    function handleAdd(event) { 
        setCounter(counter + 1);
    }
    function handleSubstract(event) { 
        setCounter(counter - 1);
    }
    function handleReset(event) { 
        setCounter(value);
    }

    return (
      <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
      </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
