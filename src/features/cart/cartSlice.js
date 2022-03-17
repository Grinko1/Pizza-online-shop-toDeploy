import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.items[existingIndex].cartQuantity += 1;
      } else {
        state.items.push({
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          name: action.payload.name,
          types: action.payload.types,
          sizes: action.payload.sizes,
          price: action.payload.price,
          category: action.payload.category,
          rating: action.payload.rating,
          size: action.payload.size,
          type: action.payload.type,
          click: action.payload.click,
          cartQuantity: +1,
        });
      }
      state.totalCount = state.totalCount + 1;

      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.totalCount = quantity;
      state.totalPrice = total;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      state.totalCount = state.totalCount - action.payload.cartQuantity;
      state.totalPrice = state.totalPrice - action.payload.price * action.payload.cartQuantity;
    },
    removeAllFromCart: (state, action) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    minusOne(state, action) {
      const repetedIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (state.items[repetedIndex].cartQuantity > 1) {
        state.items[repetedIndex].cartQuantity -= 1;
      } else if (state.items[repetedIndex].cartQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
      let { total, quantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.totalCount = quantity;
      state.totalPrice = total;
    },
  },
});

export const { addToCart, removeFromCart, removeAllFromCart, minusOne } = cartSlice.actions;

export default cartSlice.reducer;
