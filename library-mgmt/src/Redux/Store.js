

import { itemReducers } from "./Reducers"
import {createStore} from "redux"


export const store = createStore(itemReducers)