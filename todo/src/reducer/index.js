import {ADD_ITEM, REMOVE_ITEM} from '../actions/action';

const initialState = {
    todoList: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
        const newItem = {
            todo: action.payload,
            completed: false
        }
        return{            
            todoList:[...state.todoList, newItem] 
        } 
        case REMOVE_ITEM:
        let item = action.payload;
        let todos = state.todoList.filter((todo, index) =>{
           if(index.toString() !== item){return todo}
        } )

        return{
            todoList: todos         
        }
        break;
        default: return state; 
    }    
}

export default reducer;

