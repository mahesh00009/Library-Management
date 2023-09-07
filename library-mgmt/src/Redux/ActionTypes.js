import { ADD_ITEM, CLEAR_ITEMS, DECREMENT_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "./Actions"



export const addItem = (payload) => {
        return {
            type : ADD_ITEM, 
            payload : {...payload, totalPrice : payload.price, totalItem : 1}
        }
}

export const removeItem = (payload) => {

    return {
        type :  REMOVE_ITEM, 
        payload : payload
    }
}

export const incrementItem = (payload) => {
    return {
        type : INCREASE_ITEM, 
        payload : payload
    }
}


export const decrementItem = (payload) => {
    return {
        type : DECREMENT_ITEM, 
        payload : payload
    }
}

export const clearItems = () => {
    return{
        type : CLEAR_ITEMS, 
    }
}