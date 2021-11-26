import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    toggleFavoriteState(state, action) {
      const clickedItemIndex = state.products.findIndex(
        (item) => item.id === action.payload
      );
      state.products[clickedItemIndex].isFavorite = !state.products[clickedItemIndex].isFavorite
    },
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
