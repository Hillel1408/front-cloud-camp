import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

const initialState = {
    forms: {
        email: 'etemax@bk.ru',
        tel: '+7(952)422-62-44',
        nickname: '',
        name: '',
        sername: '',
        sex: '',
        radio: '1',
        checkbox: [],
        advantages: [
            {
                name: '',
            },
            {
                name: '',
            },
            {
                name: '',
            },
        ],
        about: '',
    },
};

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addForm(state, action) {
            state.forms = { ...state.forms, ...action.payload };
        },
        resetStore: () => initialState,
    },
});

export const fetchForms = createAsyncThunk(
    'forms/fetchForms',
    async (params: typeof initialState.forms) => {
        try {
            const { data } = await axios.post(
                '/content/v1/bootcamp/frontend',
                params
            );
            return data;
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }
);

export const { addForm, resetStore } = formsSlice.actions;

export default formsSlice.reducer;
