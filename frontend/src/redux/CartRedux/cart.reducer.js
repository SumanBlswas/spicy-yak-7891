import * as types from './cart.types';

const init = {
   loading:false,
   CartError:false,
   cart:[],
   isAdd:false,
   isDelete:false,
   isPatch :false
}


export default function noteReducer(state = init,{type,payload}){

    switch(type){

        case types.ERROR:{
            return {...state, CartError:true,loading:false,isAdd:false,isDelete:false,isPatch:false}
        }
        case types.LOADING:{
            return {...state,CartError:false,loading:true,isAdd:false,isDelete:false,isPatch:false}
        }

        case types.CART:{
            
            return {...state, CartError:false,loading:false,cart:payload}
        }

        case types.ADD_CART:{
           
            return {...state,CartError:false,loading:false,cart:[...state.cart,payload],isAdd:true}
        }

        case types.DELETE_CART:{
            const arr = state.cart.filter((el)=>el._id !== payload)
            return {...state, CartError:false,loading:false,cart:arr, isDelete:true}
        }


        case types.PATCH_CART:{
            const arr1 = state.cart.map((el)=>{
                if(el._id === payload.id){
                    el.title = payload.body.title
                    el.price = payload.body.price
                    el.category = payload.body.category
                }
                return el
            })
            return {...state, CartError:false,loading:false,cart:arr1,isPatch:true}
        }

        case types.RESET_CART:{
            return{...state,CartError:false,loading:false,cart:[],isAdd:false,isDelete:false,isPatch:false}
        }

        default: return state
    }


}