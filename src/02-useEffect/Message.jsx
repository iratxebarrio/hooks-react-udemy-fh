import { useEffect } from "react"



export const Message = () => {

    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            //desestructura el event
            const coords = {x, y}
            console.log(coords)
        }
        
     window.addEventListener('mousemove', onMouseMove) //puedes crear aqui la function o llamarla como se llama a onMouseMove


    
      return () => {
        window.removeEventListener('mousemove', onMouseMove) //no funcionaría si en el window.addEventListener se ejecutase la function directamente en vez de llamarla xq estariamos crando un nuevo espacio en memoria y nunca sería el mismo de window.removeEventListener

             /* 
              cuando salimos del componente, por ejemplo, al cambiar de página o por otra razón, el listener mousemove sigue estando activo porque no lo hemos limpiado. Entonces, si se intenta actualizar el estado en este componente que ya no está montado, podría causar errores, especialmente en versiones antiguas de React. Por eso, es importante limpiar los listeners en el useEffect para evitar intentar actualizar estados en componentes que ya no existen.
              En React, un componente se desmonta cuando deja de estar renderizado en el DOM y ahi es cuando se ejecuta el return del useEffect o cuando cambia la dependencia especificada, en este caso está vacío --> [] por tanto se ejecuta la "función de Limpieza (Cleanup)" solo cuando se desmonte el componente
     
     */
      }
    }, [])
    
  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
