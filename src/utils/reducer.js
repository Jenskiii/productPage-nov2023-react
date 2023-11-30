export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
};

export function reducer(cartItems, { type, payload }) {

  switch (type) {
    case ACTIONS.ADD:
      return [
        ...cartItems,
        {
          id: crypto.randomUUID(),
          amount: payload.amount,
          name: payload.name,
          price: payload.price,
          image: payload.image,
        },
      ];
    case ACTIONS.DELETE:
      return cartItems.filter((item) => item.id !== payload.id);

    case ACTIONS.CLEAR:
      if (cartItems.length > 0) {
        return (cartItems = []);
      }
      return cartItems
    default:
      throw new Error(`no action found for ${type}`);
  }
}
