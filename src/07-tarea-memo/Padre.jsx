
import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(( num ) => {
        setValor((oldValue) => oldValue + num) //coge el value del useState [valor, setValor]
    
    }, [])


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                    
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
//La memorización de la función es útil en situaciones en las que la función se pasa como prop a componentes hijos para evitar que se vuelva a renderizar innecesariamente.






