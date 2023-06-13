import { createSlice } from '@reduxjs/toolkit';

const formsSlice = createSlice({
    name: 'forms',
    initialState: {
        forms: {},
    },
    reducers: {
        addForm(state, action) {
            state.forms = { ...state.forms, ...action.payload };
            console.log(state.forms);
        },
    },
});

export const { addForm } = formsSlice.actions;

export default formsSlice.reducer;
