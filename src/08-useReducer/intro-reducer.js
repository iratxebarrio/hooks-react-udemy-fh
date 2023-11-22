const initialState = 
[
    {
        id: 1,
        todo: 'Recolectar la piedra del Alma',
        done: false
    }
]

const todoReducer = ( state = initialState, action = {} ) => {
    //si no le paso un state por defecto será initialState
    //action dice al todoReducer como quiero que cambie el estado
    //el useReducer es una function pura que regresa un state. La action le dice al reducer como se debe cambiar el state y siempre regresa un nuevo state 

    if(action.type === '[TODO]add todo' ) {
        return [...state, action.payload]
        //si es un action del type '[TODO]add todo' entonces devuelve el state y se le añade el payload
    }

    return state;

}

let todos = todoReducer()

const newTodo = {
    id: 2,
        todo: 'Recolectar la piedra del poder',
        done: false
}

    const addTodoAction = {
        type: '[TODO]add todo', //esta es la action 
        payload: newTodo //lo que va dentro de la action, no siempre hay payload (si es borrar algo por ejemplo no tiene payload)
    }

 todos = todoReducer(todos, addTodoAction  ) //llamamos a la función del reducer para que se actualice con la nueva información

 console.log({state: todos})