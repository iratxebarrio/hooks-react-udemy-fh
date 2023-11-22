export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
            //devuelve un nuevo state puede ser [] {} number, string...
            //Evitar usar push
        case '[TODO] Remove Todo':
             return [initialState.filter(todo => todo.id !== action.payload)];
            // return(console.log(action.payload, "PAYLOAD"))

            //filtra por id y devuelve un nuevo array con todos los todo menos el que coincida con el id de action.payload
            //se puede usar filter porque devuele un nuevo array, no lo muta como push
    
        default:
            return initialState;
    }
}

// throw new Error('Action.type = ABC no está implementada') --> esto se deja anotado en el switch para informar que aun falta por desarrollar, ya que esto no da error y si usas typescript tampoco da error.
//Quedaría asi --> 
/*case 'ABC':
            throw new Error('Action.type = ABC no está implementada') */
