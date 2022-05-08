import { ADD_TO_CART, DELETE_CART } from "./cartAction";

const init_cart = [];

export const cartReducer = (state = init_cart, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return [...state, payload];

    case DELETE_CART:
      const deletedData = state.filter(
        (item) => item.itemId !== payload.itemId
      );

      return deletedData;

    default:
      return state;
  }
};
