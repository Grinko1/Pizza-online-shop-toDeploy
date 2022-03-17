import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../features/pizza/pizzaSlice';
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer
  },
});
