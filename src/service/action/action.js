import { ADD_TO_CART } from "../constant"

export const addToCart= ( data) => {
    // 3rd output seeing in console
    console.log("action",data )
return{
type:ADD_TO_CART,
data:data
}
}

// export const 

//step 1