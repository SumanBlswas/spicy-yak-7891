import axios from "axios";

import {
  CART_API_CALL_FAIL,
  CART_API_CALL_REQ,
  CART_API_CALL_SUC,
} from "./cart.types";

const getCartApiReq = () => {
  return {
    type: CART_API_CALL_REQ,
  };
};
 
const getCartApiSuc = (payload) => {
  return {
    type: CART_API_CALL_SUC,
    payload,
  };
};

const getCartApiFail = () => {
  return {
    type: CART_API_CALL_FAIL,
  };
};

export const getCartApi = () => async (dispatch) => {
  dispatch(getCartApiReq());
  try {
    const response = await axios.get(
      "https://maroon-sea-urchin-tam.cyclic.app/cart",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch(getCartApiSuc(response.data));
  } catch (error) {
    dispatch(getCartApiFail());
  }
};

export const delCartApi = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://maroon-sea-urchin-tam.cyclic.app/cart/delete/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch(getCartApi());
  } catch (error) {
    console.log(error);
  }
};
