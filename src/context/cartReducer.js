export const cartReducer = (cartItems, cartAction) => {
  switch (cartAction.type) {
    case "ADD_TO_CART": {
      const exists = cartItems.find(
        (item) => item.id === cartAction.payload.id
      );
      if (exists) return cartItems;
      // console.log(cartAction.payload);
      return [...cartItems, cartAction.payload];
    }
    case "REMOVE_FROM_CART":
      return cartItems.filter((item) => item.id != cartAction.payload);

    case "CLEAR_CART": {
      return [];
    }
    default:
      return cartItems;
  }
};
