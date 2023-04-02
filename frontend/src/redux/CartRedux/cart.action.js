
import { cartAPI, cartdeleteAPI } from './cart.api'
import * as types from './cart.types';

const getCartApiREQ = () => {
    return {type:types.CART_API_REQ}
}
const getCartApiSUC = (payload) => {
    return {type:types.CART_API_SUC,payload}
}
const getCartApiERR = () => {
    return {type:types.CART_API_ERR}
}

export const getCart = () =>async (dispatch)=>{
    dispatch(getCartApiREQ())
    try{
        let res = await cartAPI()
        console.log(res);
        dispatch(getCartApiSUC(res.data));
    }catch(err){
        dispatch(getCartApiERR())
    }
}


export const deleteCart = (id) =>async (dispatch)=>{
    try{
        await cartdeleteAPI(id)
        dispatch(cartAPI());
    }catch(err){
        console.log(err)
    }

}


