import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: null,
  },
  reducers: {
    addToBasket: (state, action) => {

      state.newBasketItem = action.payload;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const newBasketItem = state => state.basket.value;

export default basketSlice.reducer;
