import { useCallback, useState, useEffect } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)
//sirve para memorizar funciones y regresa una función que se puede ejecutar
  const incrementFather = useCallback(
      (value) => {
        // setCounter(counter +1)
        setCounter( (c) => c + value ) //esto es un callBack
      },
      [],
    )

    useEffect(() => {
  //  incrementFather()
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter(counter +1)
    // }

  return (
    <>
        <h1>useCallback Hook: {counter} </h1>
        <hr />

        <ShowIncrement increment={incrementFather}  />
       
    </>
  )
}
