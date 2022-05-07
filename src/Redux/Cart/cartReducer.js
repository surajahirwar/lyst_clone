import { STATES } from "mongoose";
import { ADD_TO_CART, DELETE_CART } from "./cartAction";

const init_cart = [];

export const cartReducer = (state = init_cart, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return [...state, payload];

    default:
      return state;
  }
};
