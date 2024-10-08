import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = adminSlice.actions;
export default adminSlice.reducer;
