
import { cartaddAPI, cartAPI, cartdeleteAPI, cartupdateAPI } from './cart.api'
import * as types from './cart.types'

export const getCart = (headers) =>async (dispatch)=>{

    try{
        dispatch({type:types.LOADING})
        let res = await cartAPI(headers)
        dispatch({type:types.CART,payload:res.cart})

    }catch(err){
        dispatch({type:types.ERROR})
    }

}

export const addCart = (payload,headers) =>async (dispatch)=>{

    try{
        dispatch({type:types.LOADING})
         await cartaddAPI(payload,headers)
        // console.log(payload)
        dispatch({type:types.ADD_CART,payload:payload})

    }catch(err){
        dispatch({type:types.ERROR})
    }

}

export const deleteCart = (id,headers) =>async (dispatch)=>{

    try{
        dispatch({type:types.LOADING})
        await cartdeleteAPI(id,headers)
        dispatch({type:types.DELETE_CART,payload:id})

    }catch(err){
        dispatch({type:types.ERROR})
    }

}

export const updateCart = (body,id,headers) =>async (dispatch)=>{

    try{
        dispatch({type:types.LOADING})
        await cartupdateAPI(body,id,headers)
        dispatch({type:types.PATCH_CART,payload:{body,id}})

    }catch(err){
        dispatch({type:types.ERROR})
    }

}

