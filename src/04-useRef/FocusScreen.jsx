import { useRef } from "react"


export const FocusScreen = () => {
//Se usa useRef para que cuando cambie la ref (en este caso inputRef) no se vuelva a renderizar el componente
    const inputRef = useRef()


    const onClick = () => {
        inputRef.current.select()
      //hace que el focus vaya al input que tiene  ref={inputRef}
      //.current es para coger el valor actual
    }


  return (
    <>

    <h1>Focus Screen</h1>
    <hr />
    <input 
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        />
    <button 
        className="btn btn-primary mt-2"
        onClick={onClick}
        >
        Set focus
    </button>

    </>
  )
}
