import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";




export const MultipleCustomHooks = () => {

 const {counter, increment} = useCounter(1) //mandamos 1 para que el initialValue no sea 10

  const { data, isLoading, hasError } = useFetch(
`https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species } = !!data && data 

  //si existe name y species (si es true con !!data) entonces se desestructura de data, sino no.
  //Hay que hacerlo porque sino da error ya que al principio es null y  const { name, species } = data daría error ya que no se puede desestructurar una propiedad null
    /* 
    DEJO ANOTADO UN CÓDIGO PARA ENTENDER LA DOBLE NEGACIÓN QUE SERVÍA SI ERA LA API DE BREAKING BAD.
    const { author, quote } = !!data && data[0]; //esto se usa si es un array. si es un objeto no hace falta
    !!data convierte el valor de data en boolean
    Si es undefined o null lo convierte a false y asi no tiene que mostrar nada y no da error
    Cuando data sea undefined o null el !!data seá false, en caso contrario true
    */


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
