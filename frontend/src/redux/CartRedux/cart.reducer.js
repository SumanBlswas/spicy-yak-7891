import * as types from "./cart.types";

const init = {
  isLoading: false,
  isError: false,
  cart: [],
};

export default function cartReducer(state = init, action) {
    const {type,payload} = action;

    switch (type) {
        case types.CART_API_REQ: {
        return {
            ...state,
            isLoading: true,
        };
        }
        case types.CART_API_SUC: {
            return {
                ...state,
                isLoading: false,
                cart: payload,
            };
        }
        case types.CART_API_ERR: {
            return { 
                ...state,
                isError: true,
                isLoading: false
            };
        }
        default:
        return state;
    }
}
