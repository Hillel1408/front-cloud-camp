import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

const formsSlice = createSlice({
    name: 'forms',
    initialState: {
        forms: {},
    },
    reducers: {
        addForm(state, action) {
            state.forms = { ...state.forms, ...action.payload };
        },
    },
});

export const fetchForms = createAsyncThunk(
    'forms/fetchForms',
    async (params) => {
        try {
            const { data } = await axios.post(
                '/content/v1/bootcamp/frontend',
                params
            );
            return data;
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
);

export const { addForm } = formsSlice.actions;

export default formsSlice.reducer;
