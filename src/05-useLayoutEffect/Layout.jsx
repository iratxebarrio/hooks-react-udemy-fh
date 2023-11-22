import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";




export const Layout = () => {

 const {counter, increment} = useCounter(1) //mandamos 1 para que el initialValue no sea 10

  const { data, isLoading, hasError } = useFetch(
`https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species } = !!data && data 



  return (
    <>
      <h1>Personajes de Ricky Morty </h1>
      <hr />
      {isLoading
       ? <LoadingQuote/>
       : <Quote name={name} species={species} />
      }

      <button 
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()} 
      >
        Next quote
      </button>
      {/* el increment hay que enviarlo con function porque en useCounter.js la const increment recibe parametro */}
    </>
  );
};
