import  { useState, useMemo } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationNumber = 100) => {

  for( let i = 0; i < iterationNumber; i++ ) {
    console.log('Ahi vamos...')
  }

  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true)

    const memorizedValue = useMemo(() =>  heavyStuff(counter), [counter] )
    //en la const memorizedValue se guarda el return de heavyStuff hasta que la dependencia counter cambie

  return (
    <>
    <h1>Counter: <small>{counter}</small> </h1>
    {/* Está pasando al componente <Small/> la propiedad value con el valor de counter */}
    <hr />

    <h4>{memorizedValue}</h4>


    <button
        className='btn btn-primary'
        onClick={() => increment()}
     >
        +1
    </button>

    <button  
        className='btn btn-outline-primary'
        onClick={() => setShow(!show)}
    
    >
        Show/Hide {JSON.stringify(show)}
    </button>

    
    </>
  )
}


/*
IMPORTANTE!!
 memo se utiliza para memoizar componentes completos, mientras que useMemo se utiliza para memoizar valores específicos dentro de un componente funcional. Ambos son útiles para mejorar el rendimiento de una aplicación React al evitar renders innecesarios o recalculos costosos.


*/