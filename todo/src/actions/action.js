export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addToDo(item){
    return{
        type: ADD_ITEM,
        payload: item
    };
}

export function removeToDo(item){
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}