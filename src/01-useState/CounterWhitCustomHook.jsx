import { useCounter } from "../hooks/useCounter"


export const CounterWhitCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter()

  return (
    <>  
    <h1>Counter with Hook: {counter}</h1>
    <hr />
    <button className="btn btn-primary" onClick={increment}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={decrement}>-1</button>

    </>
  )
}

//IMPORTANTE
//En el onClick no se manda onClick={increment(2)} porque haría que se ejecutase la función automaticamente al renderizar el componente.
// Si usamos onClick= {() => increment(2)} el arrow function hace que se ejecute y se envíe como parametro el 2 sólo al hacer onClick
// Si no mandamos parametro podemos usar el onClick asi: onClick={increment}