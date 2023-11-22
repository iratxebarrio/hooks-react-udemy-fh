import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "Recolectar la piedra del Alma",
  //   done: false,
  // },

];

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || []
  //JSON.parse es lo contrario a JSON.stringify
  //si "todos" viene vacio se guarda array vacio para evitar que de errores por ejemplo el .map ya que estaría haciendo un .map de null al no haber items
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init );
  //si solo hay un reducer en el component se puede poner dispatch y sino se le da un nombre repesentativo como dispatchTodoAction
  //init es la función que inicializa el useReducer. No hace falta para que funcione pero si para que se guarden por ejemplo en el localstorage y se mantengan si
  //Puede llamarse init o patata

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) ) //solo puedo guardar string en el localStorage
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action)
    //action que se envía al reducer mediante el dispatch
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })

  }

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
         <TodoList 
           todos={todos} 
           onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
         <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};
