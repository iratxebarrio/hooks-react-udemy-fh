import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, username, email, password, onInputChange, onResetForm} = useForm({
    //podemos traer username, email y password xq hemos desestructurado formState en el return de useForm
    username: "",
    email: "",
    password: ""
    //estamos mandando al initialState del useForm el objeto con el que debe inicial el useState de formState
  }
)


  return (
    <>
      <h1>Formulario con custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      {username === "straider2" && <Message />}

      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};
