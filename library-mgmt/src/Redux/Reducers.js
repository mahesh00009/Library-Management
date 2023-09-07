import { ADD_ITEM, CLEAR_ITEMS, DECREMENT_ITEM, INCREASE_ITEM, REMOVE_ITEM } from "./Actions"


const initialState = {
    items : []
}


export const itemReducers = (state = initialState, action) => {

    switch(action.type){
        case ADD_ITEM :
            {

                return {...state, items : [...state.items, action.payload]}
        }

        case REMOVE_ITEM : {

            const indexOfBook = state.items.findIndex((elem, id) => elem.id == action.payload)

            console.log(state)

            
            const cart = state.items.filter((elem, id) => id != indexOfBook)

            return {...state, items : cart}
        }

        case INCREASE_ITEM : {


            const item = state.items.map((elem, id) => {

                return elem.id === action.payload ?
                 {...elem, 

                    totalItem : elem.totalItem < 10 ? elem.totalItem  + 1 : elem.totalItem, 
                    
                    totalPrice : elem.price * (elem.totalItem + 1),
                
                } 
                    : 
                    elem

            })

            return {...state, items : item}

        }

        case DECREMENT_ITEM : {
            const item = state.items.map((elem,id) => {
                return elem.id === action.payload ? {
                    ...elem, 

                    totalItem : elem.totalItem > 1 ? elem.totalItem  - 1 : elem.totalItem,

                    totalPrice : elem.totalItem > 1 ? elem.price * (elem.totalItem - 1) : elem.totalPrice,
                } 
                :  elem
            })
            return {...state, items : item}
        }

        case CLEAR_ITEMS: {
            return {...state , items : []}
        }
        default : {
            return state
        }
    }

}