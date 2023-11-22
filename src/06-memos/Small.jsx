import  React  from "react"
// import { memo }  from "react"

export const Small = React.memo(({value}) => {


  return (
    
    <small>{value}</small>
  )
})
//Recibe desde el componente <Memorize /> el value={counter} por eso recibe Small = ({value}) y luego simplemente lo renderiza entre las etiquetas de <small></small>

//Con memo react memoriza el componente, por eso lleva parentesis desde despues de la palabra memo hasta despues de la última llave de cierre.
//Lo memoriza para que solo se vuelva a renderizar si sus props cambian
//Solo es recomendable usarlo en componentes muy grandes o hay un proceso pesado
//memo recibe como parametro el componente

/* 
Si trabajamos con vite se puede importa memo asi o:
import  {memo}  from "react"
export const Small = memo(({value})....

*/
//Si trabajamos con CRA se quita el import y se pondría React.memo en vez de solo memo