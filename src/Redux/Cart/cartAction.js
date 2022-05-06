export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_CART = "DELETE_CART";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const deleteCart = (data) => {
  return {
    type: DELETE_CART,
    payload: data,
  };
};
