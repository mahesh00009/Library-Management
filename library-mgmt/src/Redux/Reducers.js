import { ADD_ITEM, CLEAR_ITEMS, REMOVE_ITEM } from "./Actions"


const initialState = {
    items : []
}


export const itemReducers = (state = initialState, action) => {

    switch(action.type){
        case ADD_ITEM :
            {
                return {...state, items : [...state.items, action.payload]}
        }
        case CLEAR_ITEMS: {
            return {...state , items : []}
        }

        default : {
            return state
        }
    }

}