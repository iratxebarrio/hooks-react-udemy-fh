import  { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "straider",
    email: "iratxe@mail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        //traigo todo el objeto en su 'estado actual' usando 'spread'
        [name]: value 
        /* 
        En esta desestructuración, usando propiedades computadas, le digo a JS que busque en el useState una propiedades que coincide con el value de la propiedad name del input y actualiza esa propiedad por el value del input.
        Ejemplo:
                <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
                />
        Aqui el valor de name es username y coincide con la propiedad del useState username, por tanto actualizará el username con el value actual.

        Ejemplo que no coincide:
                <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="prueba"
                value={username}
                onChange={onInputChange}
                />
        Aqui no coindice el valor del name con ninguna propiedad del useState, por tanto creará una clave:valor nueva en el objeto añadiendo prueba --> {username: 'strider', email: 'iratxe@mail.com', prueba: 'stridera'} el valor de prueba será lo que escribamos en el input y no lo cambia en pantalla, solo en el State del useState, por eso de strider inicial al escribir "a" se crea stridera

        Si en vez de [name]: value fuese [patata]: value se crearía una nueva clave:valor en el State, ya que name si lo puede buscar en las propiedades del input pero patata no
         */
    })
  };
  useEffect(() => {
    // console.log('useEffect called!!')
  }, [])
  useEffect(() => {
    // console.log('formState changed!!')
  }, [formState])
  useEffect(() => {
    // console.log('email changed!!')
  }, [email])
  
  
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

{ username === 'straider2' &&  <Message/>}
    </>
  );
};
