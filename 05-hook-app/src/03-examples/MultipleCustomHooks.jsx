import { useFetch, useCounter } from "../hooks";
import { LoadingQuote,Quote } from "./";


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1); 
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quote/${counter}`);
    
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr></hr>

            {
                isLoading
                ? <LoadingQuote></LoadingQuote>
                : <Quote quote={quote} author={author}></Quote>
            }

            <button
                disabled={isLoading}
                onClick={ () => increment(1) }
                className="btn btn-primary">
                Next quote
            </button>            

        </>
    )
}
