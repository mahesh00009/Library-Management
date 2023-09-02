import { ADD_ITEM, CLEAR_ITEMS, REMOVE_ITEM } from "./Actions"



export const addItem = (payload) => {
        return {
            type : ADD_ITEM, 
            payload : payload
        }
}

export const removeItem = (payload) => {
    return {
        type :  REMOVE_ITEM, 
        payload : payload
    }
}

export const clearItems = () => {
    return{
        type : CLEAR_ITEMS, 
    }
}