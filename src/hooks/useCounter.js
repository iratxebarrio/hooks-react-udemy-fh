import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    //si no llega el initialValue por props el valor por defecto será 10
    
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const decrement = () => {
        if(counter === 0) return; //asi si el counter es 0 ya no se actualiza mas el setCounter, evitamos números negativos, por ejemplo si es un carro de la compra.
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(initialValue)
    }



    return {
        //esto es como si devolviesemos un objeto, por tanto podria ser counter:counter pero al ser lo mismo no hace falta
        //si el return fuese un array: return [counter] la desestructuración sería const [counter] = useCounter() pero es mejor con un objeto
        counter,
        increment,
        decrement,
        reset

    }
}