import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    
  },
  reducers: {
    AddToCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        // Item already in cart, increase quantity
        const existingItem = state.cart[find];
        existingItem.quantity += 1;
      } else {
        // New item, add to cart with quantity 1
        const newItem = { ...action.payload, quantity: 1 };
        state.cart.push(newItem);
      }
      // Recalculate totals
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
      toast.success("Product added to cart");

    },
    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2)); // Ensure price is fixed to 2 decimal places
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      const itemToRemove = state.cart.find((product) => product.id === action.payload);
      if (itemToRemove) {
        // Update total quantity and price before removing the item
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        // Remove item from cart
        state.cart = state.cart.filter((product) => product.id !== action.payload);
      }
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((product) => product.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price; // Increase total price based on item price
      }
    },
    decreaseItemQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= product.price; // Decrease total price based on item price
      }
    },
  },
});

export const {
  AddToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
