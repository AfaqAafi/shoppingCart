import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  toggleSidebar: false,
  cart: []
};


export const fetchUser = createAsyncThunk('products/fetchUser',
  async () => {
  const res = await axios("https://fakestoreapi.com/products");  
  const data = await res.data
    const productsWithQuantity = data.map((product) => ({
      ...product,
      quantity: 0,
    }));
  return productsWithQuantity;
})



export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementCartItem: (state, action) => {
       const item = state.cart.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }    
    },

    decrementCartItem: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id)
      if (item.quantity < 2) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        item.quantity -= 1;
      }
    },
      sidebartoggle: (state) => { 
      state.toggleSidebar = !state.toggleSidebar
    },
    addItemToCart: (state, action) => { 
      const itemInCart = state.cart.find((item) => item.id === action.payload.id)
      if(itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action) => {
      const removedItem = state.cart.filter(item => item.id !== action.payload.id) 
      state.cart = removedItem;
    }
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});



export const { incrementCartItem, decrementCartItem, addItemToCart, removeCartItem, sidebartoggle } =
  cartSlice.actions;
export default cartSlice.reducer;
