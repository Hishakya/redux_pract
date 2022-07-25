// this is index.js in tutorial

import { ADD_TO_CART } from "../constant"

const initialState ={
    cardData:[]
}

export default function cardItems(state=[],action)
{
switch (action.type) {
    case ADD_TO_CART:
        //4th log or warn u can use
        // console.log("reducer",action)
        return[
            ...state,
            {cardData:action.data}
        ]
        // eslint-disable-next-line
        break;
        default:
            return state
}
}

// there can be more than one reducer like remove from cart 
// step 3