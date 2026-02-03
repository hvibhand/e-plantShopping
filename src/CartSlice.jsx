import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [] // each item: { name, image, cost, quantity }
};

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // payload: { name, image, cost, quantity? }
            const {name, image, cost, quantity = 1} = action.payload;
            const found = state.items.find((it) => it.name === name);
            if (found) {
                found.quantity += quantity;
            } else {
                state.items.push({name, image, cost, quantity});
            }
        },
        removeItem: (state, action) => {
            // payload: { name }
            const {name} = action.payload;
            state.items = state.items.filter((it) => it.name !== name);
        },
        updateQuantity: (state, action) => {
            // payload: { name, quantity }
            const {name, quantity} = action.payload;
            const item = state.items.find((it) => it.name === name);
            if (!item) return;
            const next = Math.max(0, quantity);
            if (next === 0) {
                state.items = state.items.filter((it) => it.name !== name);
            } else {
                item.quantity = next;
            }
        }
    }
});

export const {addItem, removeItem, updateQuantity} = CartSlice.actions;

// Selectors (optional but handy)
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
    state.cart.items.reduce((sum, it) => sum + it.quantity, 0);
export const selectCartTotal = (state) =>
    state.cart.items.reduce((sum, it) => {
        const price = parseFloat(String(it.cost).replace(/[^0-9.]/g, '')) || 0;
        return sum + price * it.quantity;
    }, 0);

export default CartSlice.reducer;