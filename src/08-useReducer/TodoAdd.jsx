import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

 const {description, onInputChange, onResetForm} = useForm({
  description: ''
 })
 //estamos indicando al useForm que el useState formState ya no se inicie con initialState sino con {description: ''}
 //en el return de useForm se devuelve desestructurado el formState por eso aqui traemos la propiedad description aunque al mismo tiempo le estemos diciendo a useForm que se inicie con description.

 const onFormSubmit = (event) => {
  event.preventDefault()
  if(description.length <= 1) return;


  const newTodo = {
    id: new Date().getTime(),
    done: false,
    description: description
  }

  onNewTodo(newTodo)
  onResetForm()
 }

  return (
    <form  onSubmit={onFormSubmit}>
      <input
        action="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name='description'
        value={description}
        //indica que el value inicial del input sea el description (en este caso '')
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  );
};
